import { OnInit, Component } from '@angular/core';
import { CompteService } from '../compte.service';
import { Compte } from '../compte';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})

export class TransactionComponent implements OnInit {

  listCompte;
  id:number;
  solde:Number;
  tempCompte:Compte;
  constructor(private compteService: CompteService) { }

  ngOnInit() {
    this.listCompte = this.compteService.getAll();
     console.log(this.listCompte);
  }

  getCompte($event){
    this.tempCompte = this.compteService.getCompte(this.id);
    this.solde = this.tempCompte.getSolde();
  }
}