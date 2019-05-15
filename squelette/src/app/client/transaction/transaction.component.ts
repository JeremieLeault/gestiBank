import { OnInit, Component } from '@angular/core';
import { CompteService } from '../compte.service';
import { Compte } from '../compte';
import { TransactionService } from './transaction.service';
import { Retrait } from './retrait';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})

export class TransactionComponent implements OnInit {

  listCompte;
  id:number;
  solde:Number;
  montant:number;
  libelle:string;
  tempCompte:Compte;
  constructor(private compteService: CompteService, private transactionService: TransactionService) { }

  ngOnInit() {
    this.listCompte = this.compteService.getAll();
     console.log(this.listCompte);
  }

  getCompte($event){
    this.tempCompte = this.compteService.getCompte(this.id);
    this.solde = this.tempCompte.getSolde();
  }

  doTransaction(){
    var retrait = new Retrait(this.id, this.montant, this.libelle, new Date());
    this.transactionService.addRetrait(retrait);
    console.log("Transaction efectué!");
  }
}