import { Injectable } from '@angular/core';
import { Conseiller} from "../model/user/conseiller";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/user/client';

@Injectable()
export class ConseillerService {
// private fakeConseillers : any = [
//      new Conseiller(0,"24/04/2019","TARDIOU","kim","tk@gmail.com","0700000000","5 rue de la fontaine",69000,"Lyon"),
//      new Conseiller(1,"12/03/2019","stephane","stephane","stephane@gmail.com","0711111111","10 rue jean jaures",69000,"Lyon")
//    ];

  private conseillerList: Conseiller[];
  private conseiller;
  url:string = "http://localhost:8080/BackEnd/conseiller/";

  constructor(private http: HttpClient) { }
  getAll():Observable<Conseiller[]>{
    return this.http.get<Conseiller[]>(this.url + "getAll");
    }

    getConseiller(id:string): Observable<Conseiller>{
  return this.http.get<Conseiller>(this.url + id);

}
 
  addConseiller(conseiller){
    //this.http.post<Conseiller>(this.url + "create").subscribe(data => this.conseiller = data)
//    console.log(this.fakeConseillers);
  }

//   delete(mle){
//     for(let i = 0; i < this.fakeConseillers.length; ++i){
      
//       if (this.fakeConseillers[i].mle == mle) { 
//         this.fakeConseillers.splice(i,1);
//       }
//     }
//     console.log(this.fakeConseillers);
  }

//  searchConseiller(search):Observable<Conseiller>{
    
//    return this.http.get<Conseiller>(this.url + search);
//  }
