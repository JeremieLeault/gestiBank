import { Injectable } from '@angular/core';
import { Compte } from '../model/user/compte';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CompteService {
  fakeComptes = [
   //   new Compte(0,0,1,250,5000,120),
   //   new Compte(1,1,2,500,10000,502),
   //   new Compte(2,1,3,800,15000,845)
    ];
    url:string = "http://localhost:8080/BackEnd/compte/";

  constructor(private http: HttpClient) { }
  
  getAll() :Observable<Compte[]> {
    return this.http.get<Compte[]>(this.url + "getAll");
  }

    getAllCptCli(id: string) :Observable<Compte[]> {
    return this.http.get<Compte[]>(this.url + "getAll/" + id);
    }

  getCompte(id:number):Observable<Compte>{
    return this.http.get<Compte>(this.url + id);
  }
}
