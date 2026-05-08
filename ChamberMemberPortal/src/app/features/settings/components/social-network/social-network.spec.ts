import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetwork } from './social-network';

describe('SocialNetwork', () => {
  let component: SocialNetwork;
  let fixture: ComponentFixture<SocialNetwork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialNetwork]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialNetwork);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
