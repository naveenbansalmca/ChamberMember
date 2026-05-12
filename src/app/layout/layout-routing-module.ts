import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalLayoutComponent } from './components/portal-layout/portal-layout.component';

const routes: Routes = [

  {
    path: '',
    component: PortalLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard/home',
        pathMatch: 'full'
      },


      {
        path: 'dashboard',
        loadChildren: () => import('../features/dashboard/dashboard-module').then(m => m.DashboardModule)
      },

      {
        path: 'events',
        loadChildren: () => import('../features/events/events-module').then(m => m.EventsModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../features/settings/settings-module').then(m => m.SettingsModule)
      },
      {
        path: 'news',
        loadChildren: () => import('../features/news/news-module').then(m => m.NewsModule)
      },
      {
        path: 'resources',
        loadChildren: () => import('../features/resources/resources-module').then(m => m.ResourcesModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
