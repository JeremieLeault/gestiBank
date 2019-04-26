import { AccesCompteModule } from './acces-compte.module';

describe('BlankPageModule', () => {
    let blankPageModule: AccesCompteModule;

    beforeEach(() => {
        blankPageModule = new AccesCompteModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
