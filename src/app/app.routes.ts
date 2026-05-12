import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard';
import { PortalLayoutComponent } from './layout/components/portal-layout/portal-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth-module')
        .then(m => m.AuthModule)
  },

  {
    path: '',
    component: PortalLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard-module')
            .then(m => m.DashboardModule)
      },
      {
        path: 'account',
        loadChildren: () =>
          import('./features/settings/settings-module')
            .then(m => m.SettingsModule)
      },
      {
        path: 'news',
        loadChildren: () =>
          import('./features/news/news-module')
            .then(m => m.NewsModule)
      },
      {
        path: 'resources',
        loadChildren: () =>
          import('./features/resources/resources-module')
            .then(m => m.ResourcesModule)
      },
      {
        path: 'events',
        loadChildren: () =>
          import('./features/events/events-module')
            .then(m => m.EventsModule)
      }
    ]
  }
];
