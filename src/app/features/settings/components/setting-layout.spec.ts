import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingLayout } from './setting-layout';

describe('SettingLayout', () => {
  let component: SettingLayout;
  let fixture: ComponentFixture<SettingLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
