import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from '../app/creation-compte/form/form.component';
import { DashAdminComponent } from 'src/app/admin/dash-admin/dash-admin.component';
import { DashConseillerComponent } from 'src/app/conseiller/dash-conseiller/dash-conseiller.component';
import { DashClientComponent } from 'src/app/client/dash-client/dash-client.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'dash-admin', component: DashAdminComponent},
  { path: 'dash-conseiller', component: DashConseillerComponent},
  { path: 'dash-client', component: DashClientComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}