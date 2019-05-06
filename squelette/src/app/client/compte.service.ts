import { Injectable } from '@angular/core';
import { Compte } from './compte';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  fakeComptes = [
      new Compte(0,0,2,250,5000,120),
      new Compte(1,1,1,500,10000,502),
      new Compte(2,1,1,800,15000,845)
    ];
  constructor() { }
  
  getAll()  {
    return this.fakeComptes;
  }
}
