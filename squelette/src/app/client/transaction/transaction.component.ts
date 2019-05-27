import { OnInit, Component } from '@angular/core';
import { Compte } from '../../model/user/compte';
import { CompteService } from '../../service/compte.service';
import { Retrait } from '../../model/mouvement/retrait';
import { TransactionService } from '../../service/transaction.service';


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