import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseillerSearchComponent } from './conseiller-search.component';

describe('ConseillerSearchComponent', () => {
  let component: ConseillerSearchComponent;
  let fixture: ComponentFixture<ConseillerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConseillerSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseillerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
