import { Component, OnInit } from '@angular/core';
import { Client } from '../../../model/user/client';
import { ClientService } from '../../../service/client.service';

@Component({
  selector: 'app-view-profil-client',
  templateUrl: './view-profil-client.component.html',
  styleUrls: ['./view-profil-client.component.css']
})
export class ViewProfilClientComponent implements OnInit {

  client: Client;
  constructor(private clientserv: ClientService) { }

  ngOnInit() {
   this.clientserv.getClient("3").subscribe(data => this.client = data) ; 
  }


  getSituation(){
    if (this.client == null || this.client.situation_perso == ""){
      return 1;
    }
    return this.client.situation_perso;
  }
}
