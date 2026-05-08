import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DASHBOARD_DATA } from '../../../dashboard/data/dashboard.data';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardMenuComponent } from '../../../dashboard/components/dashboard-menu/dashboard-menu.component';
import { HotLinksComponent } from '../../../dashboard/components/hot-links/hot-links.component';

@Component({
  selector: 'app-portal-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    DashboardHeaderComponent,
    DashboardMenuComponent,
    HotLinksComponent,
    DashboardFooterComponent
  ],
  templateUrl: './portal-layout.component.html',
  styleUrl: './portal-layout.component.css'
})
export class PortalLayoutComponent {
  readonly dashboard = DASHBOARD_DATA;
  readonly topNav = DASHBOARD_DATA.topTabs;
}
