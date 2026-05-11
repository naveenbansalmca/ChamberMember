import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DashboardMenuComponent } from '../../../../dashboard/components/dashboard-menu/dashboard-menu.component';
import { HotLinksComponent } from '../../../../dashboard/components/hot-links/hot-links.component';
import { HotLink } from '../../../../dashboard/models/hot-link.model';
import { MenuItem } from '../../../../dashboard/models/menu-item.model';

interface SidebarContent {
  menuItems: MenuItem[];
  hotLinks: HotLink[];
  adTitle: string;
  adText: string;
}

@Component({
  selector: 'app-portal-aside',
  standalone: true,
  imports: [CommonModule, DashboardMenuComponent, HotLinksComponent],
  templateUrl: './portal-aside.component.html',
  styleUrl: './portal-aside.component.css'
})
export class PortalAsideComponent {
  @Input() content!: SidebarContent;
}
