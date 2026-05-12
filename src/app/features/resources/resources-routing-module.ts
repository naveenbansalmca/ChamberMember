import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourcesComponent } from './components/resources/resources';
import { AuthGuard } from '../../core/guards/auth-guard';

const routes: Routes = [

  { path: '', component: ResourcesComponent, data: { sidebarType: 'resources' }, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'resources', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
