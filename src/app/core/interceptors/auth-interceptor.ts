
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthService } from '../services/auth';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('token');
  const shouldSkipAuth = req.url.includes('/auth/refresh') || req.url.includes('/auth/login');
  const clonedReq = token && !shouldSkipAuth ? req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  }) : req;

  return next(clonedReq).pipe(
    catchError(error => {
      if (error.status !== 401 || shouldSkipAuth) {
        return throwError(() => error);
      }

      const authService = inject(AuthService);
      return authService.refreshToken().pipe(
        switchMap((response: any) => {
          const newToken = response?.token;
          const newRefreshToken = response?.refreshToken;

          if (newToken) {
            localStorage.setItem('token', newToken);
          }
          if (newRefreshToken) {
            localStorage.setItem('refreshToken', newRefreshToken);
          }

          const retryReq = req.clone({
            setHeaders: {
              Authorization: `Bearer ${newToken || ''}`
            }
          });

          return next(retryReq);
        }),
        catchError(refreshError => {
          authService.logout();
          return throwError(() => refreshError);
        })
      );
    })
  );
};