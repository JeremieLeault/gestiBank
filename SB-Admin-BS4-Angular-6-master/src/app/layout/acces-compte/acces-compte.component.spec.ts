import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesCompteComponent } from './acces-compte.component';

describe('BlankPageComponent', () => {
    let component: AccesCompteComponent;
    let fixture: ComponentFixture<AccesCompteComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [AccesCompteComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(AccesCompteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
