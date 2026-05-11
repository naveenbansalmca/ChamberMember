import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembertoMemberComponent } from './memberto-member.component';

describe('MembertoMemberComponent', () => {
  let component: MembertoMemberComponent;
  let fixture: ComponentFixture<MembertoMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembertoMemberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembertoMemberComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
