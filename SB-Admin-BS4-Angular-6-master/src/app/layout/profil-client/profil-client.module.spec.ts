import { ProfilClientModule } from "./profil-client.module";

describe('BlankPageModule', () => {
    let blankPageModule: ProfilClientModule;

    beforeEach(() => {
        blankPageModule = new ProfilClientModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
