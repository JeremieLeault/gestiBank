import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulaireClientComponent } from './formulaire-client.component';

const routes: Routes = [
    {
        path: '',
        component: FormulaireClientComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormulaireClientRoutingModule {}
