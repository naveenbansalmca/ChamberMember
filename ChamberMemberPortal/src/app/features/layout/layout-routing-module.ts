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
        redirectTo: 'home/dashboard',
        pathMatch: 'full'
      },

      {
        path: 'events',
        loadChildren: () => import('../events/events-module').then(m => m.EventsModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../settings/settings-module').then(m => m.SettingsModule)
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
