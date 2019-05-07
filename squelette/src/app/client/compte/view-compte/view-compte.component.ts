import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Compte } from '../../compte';
import { CompteService } from '../../compte.service';
import { TransactionService } from '../../transaction/transaction.service';

@Component({
  selector: 'app-view-compte',
  templateUrl: './view-compte.component.html',
  styleUrls: ['./view-compte.component.css']
})
export class ViewCompteComponent implements OnInit {

  compte: Compte;
  id: number;
  listMouvement;

  constructor(private compteService: CompteService, private route: ActivatedRoute, private transactionService: TransactionService) {
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
   });
    this.compte = this.compteService.getCompte(this.id);
    console.log(this.compte);

    this.listMouvement = this.transactionService.getTransaction(this.id);
    console.log(this.listMouvement);
  }

}
