import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGuildComponent } from './search-guild.component';

describe('SearchGuildComponent', () => {
  let component: SearchGuildComponent;
  let fixture: ComponentFixture<SearchGuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchGuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
