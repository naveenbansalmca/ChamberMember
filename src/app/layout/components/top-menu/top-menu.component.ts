import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DASHBOARD_DATA } from '../../../features/dashboard/data/dashboard.data';

@Component({
  selector: 'app-top-menu',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css',
})
export class TopMenuComponent implements OnInit {

  readonly topNav = DASHBOARD_DATA.topTabs;


  ngOnInit(): void {

  }
}
