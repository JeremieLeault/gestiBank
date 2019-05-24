import { Component, OnInit } from '@angular/core';
import { Client } from '../../client';
import { ClientService } from '../../client.service';

@Component({
  selector: 'app-view-profil-client',
  templateUrl: './view-profil-client.component.html',
  styleUrls: ['./view-profil-client.component.css']
})
export class ViewProfilClientComponent implements OnInit {

  client: Client;
  constructor(private clientserv: ClientService) { }

  ngOnInit() {
   this.clientserv.getClient("1").subscribe(data => this.client = data) ; 
      console.log(this.client) ; 
  }

}
