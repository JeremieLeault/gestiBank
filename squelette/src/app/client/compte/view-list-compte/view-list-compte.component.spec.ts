import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListCompteComponent } from './view-list-compte.component';

describe('ViewListCompteComponent', () => {
  let component: ViewListCompteComponent;
  let fixture: ComponentFixture<ViewListCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewListCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewListCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
