import { VirementModule } from "./virement.module";


describe('BlankPageModule', () => {
    let blankPageModule: VirementModule;

    beforeEach(() => {
        blankPageModule = new VirementModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
