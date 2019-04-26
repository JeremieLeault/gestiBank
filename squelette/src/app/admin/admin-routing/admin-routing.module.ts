import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashAdminComponent } from '../dash-admin/dash-admin.component';

const adminRoutes: Routes = [
  { path: 'dash-admin', component: DashAdminComponent}
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [ RouterModule]
})

export class AdminRoutingModule { }
