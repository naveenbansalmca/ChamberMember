import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { AuthGuard } from '../../core/guards/auth-guard';

const routes: Routes = [

  {
    path: '', component: DashboardLayoutComponent, data: { sidebarType: 'dashboard' }, canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardPageComponent, data: { sidebarType: 'dashboard' }, canActivate: [AuthGuard] },
      { path: 'home', component: DashboardPageComponent, data: { sidebarType: 'dashboard' }, canActivate: [AuthGuard] },
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
