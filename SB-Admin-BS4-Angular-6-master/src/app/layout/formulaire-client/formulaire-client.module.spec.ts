import { FormulaireClientModule } from "./formulaire-client.module";


describe('BlankPageModule', () => {
    let blankPageModule: FormulaireClientModule;

    beforeEach(() => {
        blankPageModule = new FormulaireClientModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
