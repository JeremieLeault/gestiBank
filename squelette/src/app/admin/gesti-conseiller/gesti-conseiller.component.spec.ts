import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiConseillerComponent } from './gesti-conseiller.component';

describe('GestiConseillerComponent', () => {
  let component: GestiConseillerComponent;
  let fixture: ComponentFixture<GestiConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestiConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestiConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
