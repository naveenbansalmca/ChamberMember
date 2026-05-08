import { Routes } from '@angular/router';
import { DashboardPageComponent } from './features/dashboard/components/dashboard-page/dashboard-page.component';
import { PortalLayoutComponent } from './features/layout/components/portal-layout/portal-layout.component';
import { EventsComponent } from './features/events/components/events/events';
import { ResourcesComponent } from './features/resources/components/resources/resources';
import { NewsComponent } from './features/news/components/news/news';
import { SettingComponent } from './features/settings/components/Settings/setting/setting';


export const routes: Routes = [
  {
    path: '',
    component: PortalLayoutComponent,
    children: [
      { path: '', component: DashboardPageComponent },
      { path: 'events', component: EventsComponent },
      { path: 'resources', component: ResourcesComponent },
      { path: 'news', component: NewsComponent },
      { path: 'settings', component: SettingComponent }
    ]
  }
];
