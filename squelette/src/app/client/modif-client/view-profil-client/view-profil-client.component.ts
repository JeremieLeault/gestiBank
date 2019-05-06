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
    this.client = this.clientserv.getClient() ; 
      console.log(this.client) ; 
  }

}
