import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestProposalComponent } from './request-proposal.component';

describe('RequestProposalComponent', () => {
  let component: RequestProposalComponent;
  let fixture: ComponentFixture<RequestProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestProposalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestProposalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
