import { Component } from '@angular/core';
import { DASHBOARD_DATA } from '../../../../../dashboard/data/dashboard.data';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

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
