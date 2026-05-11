import { Component } from '@angular/core';
import { DASHBOARD_DATA } from '../../../dashboard/data/dashboard.data';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-menu',
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css',
})
export class TopMenuComponent {

  readonly topNav = DASHBOARD_DATA.topTabs;

  
}
