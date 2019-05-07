import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirementComponent } from './virement.component';
import { VirementRoutingModule } from './virement-routing.module';
import { VirementPageComponent } from './virement-page/virement-page.component';


@NgModule({
    imports: [CommonModule, VirementRoutingModule],
    declarations: [VirementComponent, VirementPageComponent]
})
export class VirementModule {}
