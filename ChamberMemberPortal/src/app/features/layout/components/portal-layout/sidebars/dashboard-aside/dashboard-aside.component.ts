import { Component } from '@angular/core';
import { DashboardMenuComponent } from '../../../../../dashboard/components/dashboard-menu/dashboard-menu.component';
import { HotLinksComponent } from '../../../../../dashboard/components/hot-links/hot-links.component';
import { DASHBOARD_DATA } from '../../../../../dashboard/data/dashboard.data';

@Component({
  selector: 'app-dashboard-aside',
  standalone: true,
  imports: [DashboardMenuComponent, HotLinksComponent],
  templateUrl: './dashboard-aside.component.html',
  styleUrl: './dashboard-aside.component.css'
})
export class DashboardAsideComponent {
  readonly menuItems = DASHBOARD_DATA.menuItems;
  readonly hotLinks = DASHBOARD_DATA.hotLinks;
}
