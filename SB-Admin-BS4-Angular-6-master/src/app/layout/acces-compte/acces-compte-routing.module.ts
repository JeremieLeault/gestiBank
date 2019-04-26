import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccesCompteComponent } from './acces-compte.component';

const routes: Routes = [
    {
        path: '',
        component: AccesCompteComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccesCompteRoutingModule {}
