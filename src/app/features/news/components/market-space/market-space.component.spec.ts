import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketSpaceComponent } from './market-space.component';

describe('MarketSpaceComponent', () => {
  let component: MarketSpaceComponent;
  let fixture: ComponentFixture<MarketSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketSpaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketSpaceComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
