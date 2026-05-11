import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events';

const routes: Routes = [

  { path: '', component: EventsComponent, data: { sidebarType: 'events' } },
  { path: '**', redirectTo: 'events', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
