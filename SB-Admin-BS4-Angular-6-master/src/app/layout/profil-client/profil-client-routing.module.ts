import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilClientComponent } from './profil-client.component';

const routes: Routes = [
    {
        path: '',
        component: ProfilClientComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfilClientRoutingModule {}
