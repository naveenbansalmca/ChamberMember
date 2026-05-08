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
      { path: '', component: DashboardPageComponent, data: { sidebarType: 'dashboard' } },
      { path: 'events', component: EventsComponent, data: { sidebarType: 'events' } },
      { path: 'resources', component: ResourcesComponent, data: { sidebarType: 'resources' } },
      { path: 'news', component: NewsComponent, data: { sidebarType: 'news' } },
      { path: 'settings', component: SettingComponent, data: { sidebarType: 'settings' } }
    ]
  }
];
