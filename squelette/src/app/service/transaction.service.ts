import { Injectable } from '@angular/core';
import { Depot } from '../model/mouvement/depot';
import { Retrait } from '../model/mouvement/retrait';
import { Mouvement } from '../model/mouvement/mouvement';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class TransactionService {

  url:string = "http://localhost:8080/BackEnd/transaction/";

  transactionList = [
    new Depot(0, 50, "Remboursement", new Date('December 17, 2019 03:24:00')),
    new Retrait(0,25,"Restaurant", new Date('December 22, 2019 03:55:00'))
  ];
    
  constructor(private http: HttpClient) { }

  getTransaction(id:number):Observable<Mouvement[]>{
    return this.http.get<Mouvement[]>(this.url + "getAll");
  }

  addDepot(transaction){
    return this.http.post(this.url + "create", transaction, httpOptions);
  }

  addRetrait(transaction){
    return this.http.post(this.url + "create", transaction, httpOptions);
  }
}
