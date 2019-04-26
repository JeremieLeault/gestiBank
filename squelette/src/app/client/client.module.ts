import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashClientComponent } from './dash-client/dash-client.component';
import { ModifClientComponent } from './modif-client/modif-client.component';
import { TransactionComponent } from './transaction/transaction.component';
import { MailClientComponent } from './mail-client/mail-client.component';
import { CompteComponent } from './compte/compte.component';

@NgModule({
  declarations: [
    DashClientComponent,
    ModifClientComponent,
    TransactionComponent,
    MailClientComponent,
    CompteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
