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
    { label: 'Personal', path: './settings' },
    { label: 'Profile', path: './settings/profile' },
    { label: 'Username/Password', path: './settings/change-password' },
    { label: 'Photo', path: './settings/photo' },
    { label: 'Groups/Interests', path: './settings/groups-interests' },
    { label: 'Display Preferences', path: './settings/display-preferences' }


  ];
}
