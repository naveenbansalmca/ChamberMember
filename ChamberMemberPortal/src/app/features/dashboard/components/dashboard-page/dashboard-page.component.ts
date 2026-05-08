import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DASHBOARD_DATA } from '../../data/dashboard.data';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DashboardMenuComponent } from '../dashboard-menu/dashboard-menu.component';
import { HotLinksComponent } from '../hot-links/hot-links.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, DashboardMenuComponent, HotLinksComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {
  readonly dashboard = DASHBOARD_DATA;

  displayPost = [...this.dashboard.posts];

  PostActiveTab = 1;


  FilterPostByFavourite(params: number) {
    
    if (params == 1) {
      this.PostActiveTab = 2;
      this.displayPost = this.dashboard.posts.filter(a => a.isfavourite);
    }
    else {
      this.PostActiveTab = 1;
      this.displayPost = [...this.dashboard.posts];
    }

  }
}
