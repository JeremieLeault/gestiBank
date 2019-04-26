import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiAffectComponent } from './gesti-affect.component';

describe('GestiAffectComponent', () => {
  let component: GestiAffectComponent;
  let fixture: ComponentFixture<GestiAffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestiAffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestiAffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
