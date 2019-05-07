import { Injectable } from '@angular/core';
import { Depot } from './depot';
import { Retrait } from './retrait';
import { Mouvement } from './mouvement';

@Injectable({
  providedIn: 'root'
})

export class TransactionService {

  transactionList = [
    new Depot(0, 50, "Remboursement", new Date('December 17, 2019 03:24:00')),
    new Retrait(0,25,"Restaurant", new Date('December 22, 2019 03:55:00'))
  ];
    
  constructor() { }

  getTransaction(id:number){
    var tempList: Array<Mouvement> = [];
    var tempMouvement: Mouvement;
    var j = 0;
    for (var i=0; i < this.transactionList.length; i++){
      if (this.transactionList[i].getCompte() == id){
        tempMouvement = this.transactionList[i];
        tempList.push();
        tempList[j] = tempMouvement;
        j++;
      }
    }
    return tempList;
  }

  addDepot( transaction: Depot){
    this.transactionList.push(transaction);
  }

  addRetrait( transaction: Retrait){
    this.transactionList.push(transaction);
  }
}
