import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashAdminComponent } from './dash-admin/dash-admin.component';
import { MailAdminComponent } from './mail-admin/mail-admin.component';
import { SearchAdminComponent } from './search-admin/search-admin.component';
import { GestiConseillerComponent } from './gesti-conseiller/gesti-conseiller.component';
import { GestiAffectComponent } from './gesti-affect/gesti-affect.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
//import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import {RouterModule, Routes} from '@angular/router';

const adminRoutes: Routes = [
  {
    path: '',
    component: DashAdminComponent,
    children: [
      {
        path: '',
        component: DashAdminComponent
      },
      {
        path: 'list',
        component: MenuAdminComponent
      }
    ],
  }
];

@NgModule({
  declarations: [DashAdminComponent,
    MailAdminComponent,
    SearchAdminComponent,
    GestiConseillerComponent,
    GestiAffectComponent,
    MenuAdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ]
})
export class AdminModule { }
