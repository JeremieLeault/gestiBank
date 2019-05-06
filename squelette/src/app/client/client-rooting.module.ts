import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashClientComponent } from './dash-client/dash-client.component';
import { ModifClientComponent } from './modif-client/modif-client.component';
import { TransactionComponent } from './transaction/transaction.component';
import { MailClientComponent } from './mail-client/mail-client.component';
import { CompteComponent } from './compte/compte.component';
import { FormsModule } from '@angular/forms';
import { ViewProfilClientComponent } from './modif-client/view-profil-client/view-profil-client.component';
import { ClientComponent } from './client.component';


const clientRoutes: Routes = [

  { path: '',
    component: ClientComponent,
    children: [
         { path: '', component: DashClientComponent },
         { path: 'dash-client/liste-compte', loadChildren: './compte/compte.module#CompteModule' },
         { path: 'dash-client/transaction', component: TransactionComponent },
         { path: 'dash-client/profil', component: ModifClientComponent },
         { path: 'dash-client/mail', component: MailClientComponent },
    ]
  }
];

@NgModule({
  declarations: [
    DashClientComponent,
    ModifClientComponent,
    TransactionComponent,
    MailClientComponent,
    CompteComponent,
    ViewProfilClientComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(clientRoutes)
  ],
  exports: [RouterModule]

})
export class ClientRootingModule { }
