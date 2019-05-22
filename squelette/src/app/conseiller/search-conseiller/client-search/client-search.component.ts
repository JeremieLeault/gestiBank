import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import { Client } from '../../../client/client';
import { ClientService } from '../../../client/client.service';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.css']
})
export class ClientSearchComponent implements OnInit {

 private id:Number;
 client : Client;

  constructor(private route: ActivatedRoute, private clientService: ClientService) { 

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.client = this.clientService.getClient(this.id);


  }



}
