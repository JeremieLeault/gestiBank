import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../model/user/client';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ClientService {

  //fakeClient = [
    //new Client("0", "pwd", "Leault", "Jeremie", "jeremie.leault@gmail.com", "0706060606", "28 rue de GK", 69007, "Lyon", "2", 0, 0),
    //new Client("1", "stephane", "Indienne", "Ananthee", "ana@gmail.com", "0102030405", "8 rue GK", 69007, "Lyon", "5", 0, 1)
  //];
  url:string = "http://localhost:8080/BackEnd/client/";
  //  url:string="http://10.69.5.254:8081/BackEnd/client"; 
  constructor(private http: HttpClient) { }

getAll() :Observable<Client[]>{
    return this.http.get<Client[]>(this.url + "getAll");
}

getClient(id:string): Observable<Client>{
  console.log(this.url + id);
  return this.http.get<Client>(this.url + id);

}

addClient(client): Observable<any>{
  console.log(this.url + "create");
  return this.http.post(this.url + "create", client, httpOptions).pipe();
}
//getClient(){
  //return new Client("0", "pwd", "Leault", "Jeremie", "jeremie.leault@gmail.com", "0706060606", "28 rue de GK", 69007, "Lyon", "celibataire", 0, 0)
//}
}
