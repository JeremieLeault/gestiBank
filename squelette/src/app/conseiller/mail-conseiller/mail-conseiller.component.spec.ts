import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailConseillerComponent } from './mail-conseiller.component';

describe('MailConseillerComponent', () => {
  let component: MailConseillerComponent;
  let fixture: ComponentFixture<MailConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
