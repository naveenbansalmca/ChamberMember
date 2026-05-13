import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

interface EventItem {
  id: number;
  month: string;
  day: string;
  weekDay: string;
  title: string;
  dateTime: string;
  description: string;
  badges: string[];
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class EventsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  readonly displayedColumns = ['date', 'details', 'meta'];
  readonly events = this.generateEvents(60);
  readonly dataSource = new MatTableDataSource<EventItem>(this.events);

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  viewDetails(eventId: number) {
    this.router.navigate(['./event-details', eventId], { relativeTo: this.route });
  }

  private generateEvents(total: number): EventItem[] {
    const seeds: Omit<EventItem, 'id'>[] = [
      {
        month: 'MAY',
        day: '27',
        weekDay: 'TUE',
        title: 'Ambassadors Meeting',
        dateTime: 'Thursday, May 27, 2026 | 11:00 AM - 1:00 PM',
        description: 'Pinellas Park Gateway Chamber Ambassadors Committee serves as the welcoming arm of the Chamber, building a culture of connection.',
        badges: ['Registration Required', 'Location is Exclusive']
      },
      {
        month: 'MAY',
        day: '29',
        weekDay: 'THU',
        title: 'City Council Meeting',
        dateTime: 'Thursday, May 29, 2026 | 7:00 PM - 8:00 PM',
        description: 'City Council meetings are open to the public and cover important updates and decisions impacting our community.',
        badges: []
      },
      {
        month: 'JUN',
        day: '03',
        weekDay: 'TUE',
        title: 'Coffee with the Chamber President',
        dateTime: 'Tuesday, June 3, 2026 | 8:00 AM - 9:30 AM',
        description: 'Join the Chamber President for an informal coffee and conversation about Chamber initiatives and member opportunities.',
        badges: ['Registration Required', 'Location is Exclusive']
      },
      {
        month: 'JUN',
        day: '10',
        weekDay: 'TUE',
        title: 'Employee Chamber Meeting',
        dateTime: 'Tuesday, June 10, 2026 | 8:30 AM - 9:30 AM',
        description: 'Employee Chamber of Commerce Leadership Committee monthly meeting focused on member engagement and growth.',
        badges: ['Location is Exclusive']
      },
      {
        month: 'JUN',
        day: '24',
        weekDay: 'TUE',
        title: 'Pints and People',
        dateTime: 'Tuesday, June 24, 2026 | 5:30 PM - 7:30 PM',
        description: 'Relaxed networking event with local professionals and community leaders.',
        badges: []
      },
      {
        month: 'JUL',
        day: '08',
        weekDay: 'TUE',
        title: 'Speed Leads LIVE',
        dateTime: 'Tuesday, July 8, 2026 | 11:30 AM - 1:00 PM',
        description: 'Fast-paced networking where members share business referrals and build valuable connections.',
        badges: ['Registration Required', 'Location is Exclusive']
      }
    ];

    return Array.from({ length: total }, (_, idx) => {
      const seed = seeds[idx % seeds.length];
      return {
        id: idx + 1,
        ...seed,
        title: `${seed.title} #${idx + 1}`
      };
    });
  }
}
