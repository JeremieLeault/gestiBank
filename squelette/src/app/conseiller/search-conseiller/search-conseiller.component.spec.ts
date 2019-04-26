import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchConseillerComponent } from './search-conseiller.component';

describe('SearchConseillerComponent', () => {
  let component: SearchConseillerComponent;
  let fixture: ComponentFixture<SearchConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
