import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashAdminComponent } from './dash-admin/dash-admin.component';
import { MailAdminComponent } from './mail-admin/mail-admin.component';
import { SearchAdminComponent } from './search-admin/search-admin.component';
import { GestiConseillerComponent } from './gesti-conseiller/gesti-conseiller.component';
import { GestiAffectComponent } from './gesti-affect/gesti-affect.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import {RouterModule, Routes} from '@angular/router';
import { AjoutConseillerComponent } from './ajout-conseiller/ajout-conseiller.component';
import { ListConseillerComponent } from './list-conseiller/list-conseiller.component';
import { EditConseillerComponent } from './edit-conseiller/edit-conseiller.component';

const adminRoutes: Routes = [

 {
  path: '',
  component: DashAdminComponent,
   },
     {
      path: 'dash-admin/list-conseiller',
      component: ListConseillerComponent
    },
    {
      path: 'dash-admin/ajout-conseiller',
      component: AjoutConseillerComponent
    },
    {
      path: 'dash-admin/edit-conseiller',
      component: EditConseillerComponent
    }

];

@NgModule({
  declarations: [DashAdminComponent,
    MailAdminComponent,
    SearchAdminComponent,
    GestiConseillerComponent,
    GestiAffectComponent,
    MenuAdminComponent,
    AjoutConseillerComponent,
    ListConseillerComponent,
    EditConseillerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ]
})
export class AdminModule { }
