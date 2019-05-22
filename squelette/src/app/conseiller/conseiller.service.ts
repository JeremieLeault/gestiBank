import { Injectable } from '@angular/core';
import { Conseiller} from "../conseiller/conseiller";
import { Observable } from 'rxjs';
import { Client } from '../client/client';

@Injectable({
  providedIn: 'root'
})
export class ConseillerService {
private fakeConseillers : any = [
      new Conseiller(0,"24/04/2019","TARDIOU","kim","tk@gmail.com","0700000000","5 rue de la fontaine",69000,"Lyon"),
      new Conseiller(1,"12/03/2019","stephane","stephane","stephane@gmail.com","0711111111","10 rue jean jaures",69000,"Lyon")
    ];
  constructor() { }
  getAll()  {
    
    return this.fakeConseillers;
   
  }
 
  addConseiller(conseiller){
    this.fakeConseillers.push(conseiller);
    console.log(this.fakeConseillers);
  }

  delete(mle){
    for(let i = 0; i < this.fakeConseillers.length; ++i){
      
      if (this.fakeConseillers[i].mle == mle) { 
        this.fakeConseillers.splice(i,1);
      }
    }
    console.log(this.fakeConseillers);
  }
}
