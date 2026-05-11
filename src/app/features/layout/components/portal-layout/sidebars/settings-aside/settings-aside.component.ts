import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-settings-aside',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './settings-aside.component.html',
  styleUrl: './settings-aside.component.css'
})
export class SettingsAsideComponent {
  readonly personalItems = [

    { label: 'Profile', path: './account/profile' },
    { label: 'Username/Password', path: './account/change-password' },
    { label: 'Photo', path: './account/photo' },
    { label: 'Groups/Interests', path: './account/groups-interests' },
    { label: 'Display Preferences', path: './account/display-preferences' }
  ];

  isOpen: boolean = true;

  SelectedButton:string='personal';
}
