import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoiteMessagePageComponent } from './boite-message-page.component';

describe('BoiteMessagePageComponent', () => {
  let component: BoiteMessagePageComponent;
  let fixture: ComponentFixture<BoiteMessagePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoiteMessagePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoiteMessagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
