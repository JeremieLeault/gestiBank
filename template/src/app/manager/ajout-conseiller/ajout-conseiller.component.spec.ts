import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutConseillerComponent } from './ajout-conseiller.component';

describe('AjoutConseillerComponent', () => {
  let component: AjoutConseillerComponent;
  let fixture: ComponentFixture<AjoutConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
