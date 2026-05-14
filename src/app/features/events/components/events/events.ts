import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from '../../Services/event.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { EventItem } from '../../Models/EventItem';


@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class EventsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  readonly displayedColumns = ['date', 'details', 'meta'];
  events: EventItem[] = [];
  readonly dataSource = new MatTableDataSource<EventItem>(this.events);
  activeView: 'list' | 'calendar' = 'list';
  currentCalendarMonthIndex = 0;
  readonly weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  readonly monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    @Inject(EventService) private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  private loadEvents(): void {
    this.eventService.getEvents().subscribe({
      next: (data) => {
        this.events = data;
        this.events.forEach(element => {
          debugger;
          element.month = this.monthNames[new Date(element.startDate).getMonth()] || element.month;
          element.day = new Date(element.startDate).getDate();
          element.weekDay = this.weekdays[new Date(element.startDate).getDay()];

        });
        this.dataSource.data = this.events;
        if (this.paginator) {
          this.dataSource.paginator = this.paginator;
        }
      },
      error: (error) => {
        console.error('Failed to load events:', error);
        // Fallback to empty array or mock data if needed
        this.events = [];
        this.dataSource.data = this.events;
        if (this.paginator) {
          this.dataSource.paginator = this.paginator;
        }
      }
    });
  }

  switchView(view: 'list' | 'calendar') {
    this.activeView = view;
    if (view === 'list' && this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
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


  openAddEvent(Component: 'Add' | 'Manage' = 'Add') {
    debugger;
    this.router.navigate([`./${Component.toLowerCase()}-event`], { relativeTo: this.route });
  }
}
