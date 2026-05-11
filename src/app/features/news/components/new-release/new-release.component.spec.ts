import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReleaseComponent } from './new-release.component';

describe('NewReleaseComponent', () => {
  let component: NewReleaseComponent;
  let fixture: ComponentFixture<NewReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewReleaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReleaseComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
