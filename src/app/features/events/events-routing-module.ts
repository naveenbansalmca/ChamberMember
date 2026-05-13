import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events';
import { AuthGuard } from '../../core/guards/auth-guard';
import { EventLayoutComponent } from './components/event-layout.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';

const routes: Routes = [


  {
    path: '', component: EventLayoutComponent, data: { sidebarType: 'events' }, canActivate: [AuthGuard],
    children: [
      { path: '', component: EventsComponent, data: { sidebarType: 'events' }, canActivate: [AuthGuard] },
      { path: 'event-details/:id', component: EventDetailsComponent, data: { sidebarType: 'events' }, canActivate: [AuthGuard] }


    ]

  },

  { path: '**', redirectTo: 'events', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
