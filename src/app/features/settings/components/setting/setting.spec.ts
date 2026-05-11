import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingComponent } from './setting';

describe('Setting', () => {
  let component: SettingComponent;
  let fixture: ComponentFixture<SettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SettingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
