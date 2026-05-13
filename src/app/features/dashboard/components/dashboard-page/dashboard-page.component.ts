import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DASHBOARD_DATA } from '../../data/dashboard.data';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {
  readonly dashboard = DASHBOARD_DATA;

  displayPost = [...this.dashboard.posts];

  PostActiveTab = 1;
  selectedPostType = 0;

  updateFilterType(typeId: string) {
    this.selectedPostType = Number(typeId);
    this.applyFilters();
  }

  FilterPostByFavourite(params: number) {
    this.PostActiveTab = params === 1 ? 2 : 1;
    this.applyFilters();
  }

  private applyFilters() {
    let filtered = [...this.dashboard.posts];

    if (this.PostActiveTab === 2) {
      filtered = filtered.filter(post => post.isfavourite);
    }

    if (this.selectedPostType > 0) {
      filtered = filtered.filter(post => post.typeId === this.selectedPostType);
    }

    this.displayPost = filtered;
  }
}
