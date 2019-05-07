import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulaireClientComponent } from './formulaire-client.component';
import { FormulaireClientRoutingModule } from './formulaire-client-routing.module';
import { FormAnaComponent } from './form-ana/form-ana.component';



@NgModule({
    imports: [CommonModule, FormulaireClientRoutingModule],
    declarations: [FormulaireClientComponent, FormAnaComponent]
})
export class FormulaireClientModule {}
