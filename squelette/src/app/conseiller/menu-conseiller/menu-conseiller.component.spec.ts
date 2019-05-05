import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuConseillerComponent } from './menu-conseiller.component';

describe('MenuConseillerComponent', () => {
  let component: MenuConseillerComponent;
  let fixture: ComponentFixture<MenuConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
