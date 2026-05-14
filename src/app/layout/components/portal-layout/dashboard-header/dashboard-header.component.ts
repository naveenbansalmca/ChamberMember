import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth';

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.css'
})
export class DashboardHeaderComponent {
  @Input() chamberName = '';
  @Input() memberName = '';
  @Input() memberLocation = '';

  showDropdown = false;

  constructor(private authService: AuthService, private router: Router) {}

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  onAccountSettings() {
    this.router.navigate(['/account']);
    this.showDropdown = false;
  }

  onLogout() {
    this.authService.logout();
    this.showDropdown = false;
  }
}
