import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DASHBOARD_DATA } from '../../../../../features/dashboard/data/dashboard.data';

@Component({
  selector: 'app-dashboard-aside',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './dashboard-aside.component.html',
  styleUrl: './dashboard-aside.component.css'
})
export class DashboardAsideComponent {
  readonly menuItems = DASHBOARD_DATA.menuItems;
  readonly hotLinks = DASHBOARD_DATA.hotLinks;
}
