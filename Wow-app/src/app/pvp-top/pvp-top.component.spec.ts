import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvpTopComponent } from './pvp-top.component';

describe('PvpTopComponent', () => {
  let component: PvpTopComponent;
  let fixture: ComponentFixture<PvpTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvpTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvpTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
