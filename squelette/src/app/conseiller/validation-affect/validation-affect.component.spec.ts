import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationAffectComponent } from './validation-affect.component';

describe('ValidationAffectComponent', () => {
  let component: ValidationAffectComponent;
  let fixture: ComponentFixture<ValidationAffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationAffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationAffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
