import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccesCompteComponent } from './acces-compte.component';
import { AccesCompteRoutingModule } from './acces-compte-routing.module';

@NgModule({
    imports: [CommonModule, AccesCompteRoutingModule],
    declarations: [AccesCompteComponent]
})
export class AccesCompteModule {}
