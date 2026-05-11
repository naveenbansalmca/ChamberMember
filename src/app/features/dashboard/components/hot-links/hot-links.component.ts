import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HotLink } from '../../models/hot-link.model';

@Component({
  selector: 'app-hot-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hot-links.component.html',
  styleUrl: './hot-links.component.css'
})
export class HotLinksComponent {
  @Input() links: HotLink[] = [];
}
