import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { TopMenuComponent } from '../top-menu/top-menu.component';
import { DashboardAsideComponent } from './sidebars/dashboard-aside/dashboard-aside.component';
import { EventsAsideComponent } from './sidebars/events-aside/events-aside.component';
import { ResourcesAsideComponent } from './sidebars/resources-aside/resources-aside.component';
import { NewsAsideComponent } from './sidebars/news-aside/news-aside.component';
import { SettingsAsideComponent } from './sidebars/settings-aside/settings-aside.component';
import { DASHBOARD_DATA } from '../../../features/dashboard/data/dashboard.data';

type SidebarType = 'dashboard' | 'events' | 'resources' | 'news' | 'settings';

@Component({
  selector: 'app-portal-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    DashboardHeaderComponent,
    DashboardAsideComponent,
    EventsAsideComponent,
    ResourcesAsideComponent,
    NewsAsideComponent,
    SettingsAsideComponent,
    DashboardFooterComponent,
    TopMenuComponent
  ],
  templateUrl: './portal-layout.component.html',
  styleUrl: './portal-layout.component.css'
})
export class PortalLayoutComponent implements OnInit {
  readonly dashboard = DASHBOARD_DATA;
  currentSidebarType: SidebarType = 'dashboard';

  constructor(private readonly router: Router) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => this.setSidebarContent());
  }

  ngOnInit(): void {
    this.setSidebarContent();
  }

  private setSidebarContent(): void {
    const childSnapshot = this.getDeepestChildSnapshot(this.router.routerState.snapshot.root);
    const sidebarType = childSnapshot?.data['sidebarType'] as SidebarType | undefined;
    this.currentSidebarType = sidebarType ?? 'dashboard';
  }

  private getDeepestChildSnapshot(snapshot: ActivatedRouteSnapshot): ActivatedRouteSnapshot | null {
    let current: ActivatedRouteSnapshot | null = snapshot;
    while (current?.firstChild) {
      current = current.firstChild;
    }
    return current;
  }
}
