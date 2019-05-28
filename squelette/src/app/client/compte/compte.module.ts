import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCompteComponent } from './view-compte/view-compte.component';
import { ViewListCompteComponent } from './view-list-compte/view-list-compte.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TransactionService } from '../../service/transaction.service';
import { ClientService } from '../../service/client.service';

const routes: Routes = [
  { path: '', component: ViewListCompteComponent },
  { path: 'view-compte/:id', component: ViewCompteComponent }
];

@NgModule({
  declarations: [
    ViewCompteComponent,
    ViewListCompteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule],
  exports: [
    RouterModule
  ],
  providers:[
    ClientService,
    TransactionService
  ]
})
export class CompteModule { }
