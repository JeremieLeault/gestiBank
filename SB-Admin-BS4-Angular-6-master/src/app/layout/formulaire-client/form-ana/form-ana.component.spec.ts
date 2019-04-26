import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormAnaComponent } from './form-ana.component';


describe('FormComponent', () => {
  let component: FormAnaComponent;
  let fixture: ComponentFixture<FormAnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
