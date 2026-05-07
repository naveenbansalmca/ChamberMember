import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DASHBOARD_DATA } from '../../data/dashboard.data';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {
  readonly dashboard = DASHBOARD_DATA;
}
