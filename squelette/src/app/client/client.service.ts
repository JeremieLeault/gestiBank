import { Injectable } from '@angular/core';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  fakeClient = [
    new Client("0", "pwd", "Leault", "Jeremie", "jeremie.leault@gmail.com", "0706060606", "28 rue de GK", 69007, "Lyon", "2", 0, 0),
    new Client("1", "stephane", "Indienne", "Ananthee", "ana@gmail.com", "0102030405", "8 rue GK", 69007, "Lyon", "5", 0, 1)
  ];
  constructor() { }
  getAll() {
  
    return this.fakeClient;
}

getClient(id): Client{

  var tempClient: Client;
  for (var i=0; i < this.fakeClient.length; i++){
    if (this.fakeClient[i].getId() == id){
      tempClient = this.fakeClient[i];
    }
  }
  console.log(tempClient);
  return tempClient;

}


searchConseiller(search:string){
  var tempList:Array<Client> = [];
  for(let i = 0; i < this.fakeClient.length; ++i){
    
    if ((this.fakeClient[i].nom.indexOf(search) == 0) || (this.fakeClient[i].prenom.indexOf(search) == 0)) { 
      tempList.push(this.fakeClient[i]);
    }
  }
  return tempList;
}
//getClient(){
  //return new Client("0", "pwd", "Leault", "Jeremie", "jeremie.leault@gmail.com", "0706060606", "28 rue de GK", 69007, "Lyon", "celibataire", 0, 0)
//}
}
