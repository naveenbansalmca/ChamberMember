import { Routes } from '@angular/router';
import { DashboardPageComponent } from './features/dashboard/components/dashboard-page/dashboard-page.component';
import { EventsPageComponent } from './features/events/components/events-page/events-page.component';
import { PortalLayoutComponent } from './features/layout/components/portal-layout/portal-layout.component';
import { NewsPageComponent } from './features/news/components/news-page/news-page.component';
import { ResourcesPageComponent } from './features/resources/components/resources-page/resources-page.component';
import { SettingsPageComponent } from './features/settings/components/settings-page/settings-page.component';

export const routes: Routes = [
  {
    path: '',
    component: PortalLayoutComponent,
    children: [
      { path: '', component: DashboardPageComponent },
      { path: 'events', component: EventsPageComponent },
      { path: 'resources', component: ResourcesPageComponent },
      { path: 'news', component: NewsPageComponent },
      { path: 'settings', component: SettingsPageComponent }
    ]
  }
];
