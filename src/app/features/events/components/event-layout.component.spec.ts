import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventLayoutComponent } from '../components/event-layout.component';

describe('EventLayoutComponent', () => {
  let component: EventLayoutComponent;
  let fixture: ComponentFixture<EventLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventLayoutComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
