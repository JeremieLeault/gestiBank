import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashAdminComponent } from './dash-admin/dash-admin.component';
import { MailAdminComponent } from './mail-admin/mail-admin.component';
import { SearchAdminComponent } from './search-admin/search-admin.component';
import { GestiConseillerComponent } from './gesti-conseiller/gesti-conseiller.component';
import { GestiAffectComponent } from './gesti-affect/gesti-affect.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { AjoutConseillerComponent } from './ajout-conseiller/ajout-conseiller.component';
import { ListConseillerComponent } from './list-conseiller/list-conseiller.component';
import { EditConseillerComponent } from './edit-conseiller/edit-conseiller.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin.component';
import { ConseillerService } from '../service/conseiller.service';

const adminRoutes: Routes = [

    {
        path: '',
        component: AdminComponent,
        children: [
            { path: 'dash-admin/ajout-conseiller', component: AjoutConseillerComponent },
            { path: 'dash-admin/edit-conseiller', component: EditConseillerComponent },
            { path: 'dash-admin/mail-admin', component: MailAdminComponent },
            { path: 'dash-admin/gesti-affect', component: GestiAffectComponent },
            { path: 'dash-admin/gesti-conseiller', component: GestiConseillerComponent },
            { path: 'dash-admin/search-admin', component: SearchAdminComponent }
        ]
    },
    //  {
    //   path: 'dash-admin/list-conseiller',
    //   component: ListConseillerComponent
    // },
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
        EditConseillerComponent,
        AdminComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(adminRoutes),
        HttpClientModule
    ],
    providers: [
        ConseillerService
    ]
})
export class AdminModule { }
