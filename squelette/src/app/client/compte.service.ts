import { Injectable } from '@angular/core';
import { Compte } from './compte';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  fakeComptes = [
      new Compte(0,0,"1",250,5000,120),
      new Compte(1,1,"2",500,10000,502),
      new Compte(2,1,"3",800,15000,845)
    ];
  constructor() { }
  
  getAll()  {
    return this.fakeComptes;
  }

  getCompte(id:number):Compte{
    var tempCompte:Compte
    for (var i = 0; i < this.fakeComptes.length; i++){
      if (this.fakeComptes[i].getNumeroCompte() == id){
        tempCompte = this.fakeComptes[i];
      }
    }
    return tempCompte;
  }
}
