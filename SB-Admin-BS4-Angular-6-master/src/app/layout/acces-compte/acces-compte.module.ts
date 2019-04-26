import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccesCompteComponent } from './acces-compte.component';
import { AccesCompteRoutingModule } from './acces-compte-routing.module';
import { AffichercomptesComponent } from './affiche-list-compte/affichercomptes.component';

@NgModule({
    imports: [CommonModule, AccesCompteRoutingModule],
    declarations: [AccesCompteComponent, AffichercomptesComponent]
})
export class AccesCompteModule {}
