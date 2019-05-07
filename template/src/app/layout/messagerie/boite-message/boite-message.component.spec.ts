import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageBoxComponent } from './boite-message.component';


describe('BlankPageComponent', () => {
    let component: MessageBoxComponent;
    let fixture: ComponentFixture<MessageBoxComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [MessageBoxComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
