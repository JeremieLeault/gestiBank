import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichercomptesComponent } from './affichercomptes.component';

describe('AffichercomptesComponent', () => {
  let component: AffichercomptesComponent;
  let fixture: ComponentFixture<AffichercomptesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichercomptesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichercomptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
