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
  activeView: 'list' | 'calendar' = 'list';
  currentCalendarMonthIndex = 0;
  readonly weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  readonly monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  switchView(view: 'list' | 'calendar') {
    this.activeView = view;
  }

  viewDetails(eventId: number) {
    this.router.navigate(['./event-details', eventId], { relativeTo: this.route });
  }

  prevCalendarMonth() {
    if (this.currentCalendarMonthIndex > 0) {
      this.currentCalendarMonthIndex -= 1;
    }
  }

  nextCalendarMonth() {
    if (this.currentCalendarMonthIndex < this.calendarMonths.length - 1) {
      this.currentCalendarMonthIndex += 1;
    }
  }

  get currentCalendarMonth() {
    return this.calendarMonths[this.currentCalendarMonthIndex] || null;
  }

  get calendarMonths() {
    const groups = new Map<string, { month: string; monthIndex: number; year: number; events: EventItem[] }>();

    this.events.forEach(event => {
      const monthIndex = this.monthNames.indexOf(event.month);
      const year = 2026;
      const monthKey = `${event.month}-${year}`;
      if (!groups.has(monthKey)) {
        groups.set(monthKey, { month: event.month, monthIndex, year, events: [] });
      }
      groups.get(monthKey)!.events.push(event);
    });

    return Array.from(groups.values())
      .sort((a, b) => a.monthIndex - b.monthIndex)
      .map(group => ({
        ...group,
        weeks: this.buildMonthGrid(group.monthIndex, group.year, group.events)
      }));
  }

  private buildMonthGrid(monthIndex: number, year: number, events: EventItem[]) {
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    const firstWeekday = new Date(year, monthIndex, 1).getDay();
    const weeks: Array<Array<{ day: number; events: EventItem[] } | null>> = [];
    let week: Array<{ day: number; events: EventItem[] } | null> = Array(7).fill(null);

    for (let i = 0; i < firstWeekday; i++) {
      week[i] = null;
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const weekday = new Date(year, monthIndex, day).getDay();
      const dayEvents = events.filter(e => Number(e.day) === day);
      week[weekday] = { day, events: dayEvents };

      if (weekday === 6 || day === daysInMonth) {
        weeks.push(week);
        week = Array(7).fill(null);
      }
    }

    return weeks;
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
