import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';

const routes: Routes = [

  {
    path: '', component: DashboardLayoutComponent, data: { sidebarType: 'dashboard' },
    children: [
      { path: '', component: DashboardPageComponent, data: { sidebarType: 'dashboard' } },
      { path: 'home', component: DashboardPageComponent, data: { sidebarType: 'dashboard' } },
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
