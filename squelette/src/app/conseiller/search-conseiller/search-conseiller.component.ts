import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client/client.service';
import { Client } from '../../client/client';

@Component({
  selector: 'app-search-conseiller',
  templateUrl: './search-conseiller.component.html',
  styleUrls: ['./search-conseiller.component.css']
})
export class SearchConseillerComponent implements OnInit {


  private listClient: Client[];
  private listClientAffiche: Client[];
  private search: string = "";
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getAll().subscribe(data => this.listClient = data);
    console.log(this.listClient);
    this.listClientAffiche = this.listClient;
    console.log(this.listClientAffiche);
  }

  doSearch() {
    var tempList: Array<Client> = [];
    console.log(this.search);
    if (this.search == "") {
      tempList = this.listClient;
    } else {
      for (var i = 0; i < this.listClient.length; i++) {
        if (this.listClient[i].getNom().indexOf(this.search) == 0) {
            tempList.push(this.listClient[i]);
        }
      }
    }
    this.listClientAffiche = tempList;
  }
}
