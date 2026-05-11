import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-events-aside',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events-aside.component.html',
  styleUrl: './events-aside.component.css'
})
export class EventsAsideComponent {
  readonly quickActions = [
    'Events I\'m registered for',
    'Events I\'m attending/watching',
    'Post an Event'
  ];
}
