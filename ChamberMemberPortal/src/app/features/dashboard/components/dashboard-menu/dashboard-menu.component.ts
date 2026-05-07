import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-dashboard-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-menu.component.html',
  styleUrl: './dashboard-menu.component.css'
})
export class DashboardMenuComponent {
  @Input() items: MenuItem[] = [];
}
