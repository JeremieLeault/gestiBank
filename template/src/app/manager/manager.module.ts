import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
//import { ListeConseillerComponent } from './liste-conseiller/liste-conseiller.component';
//import { AjoutConseillerComponent } from './ajout-conseiller/ajout-conseiller.component';
//import { EditConseillerComponent } from './edit-conseiller/edit-conseiller.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        ManagerRoutingModule
    ],
    declarations: [ 
        ManagerComponent, 
  //      ListeConseillerComponent, 
  //      AjoutConseillerComponent, 
   //     EditConseillerComponent
    ]
})
export class ManagerModule {}
