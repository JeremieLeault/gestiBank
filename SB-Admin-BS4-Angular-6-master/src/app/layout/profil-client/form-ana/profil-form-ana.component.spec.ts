import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('FormComponent', () => {
  let component: ProfilFormAnaComponent;
  let fixture: ComponentFixture<ProfilFormAnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilFormAnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilFormAnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
