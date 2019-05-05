import { MessageBoxModule } from "./boite-message.module";

describe('BlankPageModule', () => {
    let blankPageModule: MessageBoxModule;

    beforeEach(() => {
        blankPageModule = new MessageBoxModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
