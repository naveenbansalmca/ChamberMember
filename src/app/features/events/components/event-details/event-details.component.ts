import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css',
})
export class EventDetailsComponent {
  readonly eventId: string | null;

  constructor(private route: ActivatedRoute) {
    this.eventId = this.route.snapshot.paramMap.get('id');
  }
}
