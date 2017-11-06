import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeTopComponent } from './challenge-top.component';

describe('ChallengeTopComponent', () => {
  let component: ChallengeTopComponent;
  let fixture: ComponentFixture<ChallengeTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
