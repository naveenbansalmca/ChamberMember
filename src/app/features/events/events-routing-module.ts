import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events';
import { AuthGuard } from '../../core/guards/auth-guard';

const routes: Routes = [

  { path: '', component: EventsComponent, data: { sidebarType: 'events' }, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'events', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
