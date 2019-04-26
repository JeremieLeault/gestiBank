import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigClientComponent } from './config-client.component';

describe('ConfigClientComponent', () => {
  let component: ConfigClientComponent;
  let fixture: ComponentFixture<ConfigClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
