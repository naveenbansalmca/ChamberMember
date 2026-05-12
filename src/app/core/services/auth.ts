import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
    
  ) {}

  login(data: any) {

    const fakeToken = 'jwt-token-demo';

    localStorage.setItem('token', fakeToken);
    localStorage.setItem('role', 'Admin');

    this.router.navigate(['/dashboard']);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getRole(): string {
    return localStorage.getItem('role') || '';
  }
}