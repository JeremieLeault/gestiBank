import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfilClientComponent } from './view-profil-client.component';

describe('ViewProfilClientComponent', () => {
  let component: ViewProfilClientComponent;
  let fixture: ComponentFixture<ViewProfilClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProfilClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProfilClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
