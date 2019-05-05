import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashClientComponent } from './dash-client/dash-client.component';
import { ModifClientComponent } from './modif-client/modif-client.component';
import { TransactionComponent } from './transaction/transaction.component';
import { MailClientComponent } from './mail-client/mail-client.component';
import { CompteComponent } from './compte/compte.component';
import { MenuClientComponent } from './menu-client/menu-client.component';
import { FormsModule } from '@angular/forms';


const clientRoutes: Routes = [

  { path: '', component: DashClientComponent },
  { path: 'dash-client/liste-compte', component: CompteComponent },
  { path: 'dash-client/transaction', component: TransactionComponent },
  { path: 'dash-client/profil', component: ModifClientComponent },
  { path: 'dash-client/mail', component: MailClientComponent },



];

@NgModule({
  declarations: [
    DashClientComponent,
    ModifClientComponent,
    TransactionComponent,
    MailClientComponent,
    CompteComponent,
    MenuClientComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(clientRoutes)
  ]
})
export class ClientModule { }
