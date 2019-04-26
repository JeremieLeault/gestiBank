import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashConseillerComponent } from './dash-conseiller/dash-conseiller.component';
import { MailConseillerComponent } from './mail-conseiller/mail-conseiller.component';
import { ValidationAffectComponent } from './validation-affect/validation-affect.component';
import { ConfigClientComponent } from './config-client/config-client.component';
import { SearchConseillerComponent } from './search-conseiller/search-conseiller.component';

@NgModule({
  declarations: [DashConseillerComponent,
    MailConseillerComponent,
    ValidationAffectComponent,
    ConfigClientComponent,
    SearchConseillerComponent],
  imports: [
    CommonModule
  ]
})
export class ConseillerModule { }
