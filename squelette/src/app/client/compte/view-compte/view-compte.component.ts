import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Compte } from '../../../model/user/compte';
import { CompteService } from '../../../service/compte.service';
import { TransactionService } from '../../../service/transaction.service';
import { Depot } from '../../../model/mouvement/depot';
import { Mouvement } from '../../../model/mouvement/mouvement';


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
    this.compteService.getCompte(this.id).subscribe(data => this.compte = data);
    console.log(this.compte);

    this.transactionService.getTransaction(this.id).subscribe(data => this.listMouvement = data);
    console.log(this.listMouvement);
  }

  verifCompte(tempCompte: Mouvement):boolean{
    if (tempCompte instanceof Depot){
      return true;
    }
    else{
      return false;
    }
  }
}
