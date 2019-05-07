import { NewMessageModule } from "./new-message.module";


describe('BlankPageModule', () => {
    let blankPageModule: NewMessageModule;

    beforeEach(() => {
        blankPageModule = new NewMessageModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
