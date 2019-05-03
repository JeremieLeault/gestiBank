import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirementPageComponent } from './virement-page.component';

describe('VirementPageComponent', () => {
  let component: VirementPageComponent;
  let fixture: ComponentFixture<VirementPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirementPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
