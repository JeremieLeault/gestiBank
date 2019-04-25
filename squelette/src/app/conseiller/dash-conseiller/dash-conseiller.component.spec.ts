import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashConseillerComponent } from './dash-conseiller.component';

describe('DashConseillerComponent', () => {
  let component: DashConseillerComponent;
  let fixture: ComponentFixture<DashConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
