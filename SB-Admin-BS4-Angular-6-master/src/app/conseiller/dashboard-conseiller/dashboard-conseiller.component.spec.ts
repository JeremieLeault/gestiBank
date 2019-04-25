import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConseillerComponent } from './dashboard-conseiller.component';

describe('DashboardConseillerComponent', () => {
  let component: DashboardConseillerComponent;
  let fixture: ComponentFixture<DashboardConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
