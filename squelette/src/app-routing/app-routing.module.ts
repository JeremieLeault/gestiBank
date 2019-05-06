import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from '../app/creation-compte/form-ana/form.component';
import { DashConseillerComponent } from 'src/app/conseiller/dash-conseiller/dash-conseiller.component';
import { AppComponent } from 'src/app/app.component';
import { DashAdminComponent } from 'src/app/admin/dash-admin/dash-admin.component';
import { AccueilComponent } from 'src/app/accueil/accueil.component';

const routes: Routes = [
    { path: '', component: AccueilComponent },
    { path: 'home-page', component: AccueilComponent },
    { path: 'form', component: FormComponent },
    {
        path: 'dash-admin', component: DashAdminComponent
        //loadChildren: '../app/admin/admin.module#AdminModule'
    },
    { path: 'dash-conseiller', component: DashConseillerComponent },
    { path: 'dash-client', loadChildren: 'src/app/client/client.module#ClientModule' },
];

@NgModule({
    //declarations: [ AppComponent, FormComponent],
    imports: [

        RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
