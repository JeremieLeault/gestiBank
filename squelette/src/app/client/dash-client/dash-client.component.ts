import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/user/client';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-dash-client',
  templateUrl: './dash-client.component.html',
  styleUrls: ['./dash-client.component.css']
})
export class DashClientComponent implements OnInit {

    client: Client;
  constructor(private clientserv: ClientService) { }

  ngOnInit() {
   this.clientserv.getClient("3").subscribe(data => this.client = data) ; 
  }

}
