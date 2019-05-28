import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../service/client.service';


@Component({
  selector: 'app-search-conseiller',
  templateUrl: './search-conseiller.component.html',
  styleUrls: ['./search-conseiller.component.css']
})
export class SearchConseillerComponent implements OnInit {


  private listClient;
  private listClientAffiche;
  private search: string = "";
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getAll().subscribe(data => this.listClientAffiche = data);
  }

  doSearch(search) {
    console.log(this.listClientAffiche);
//    var tempList: Array<Client> = [];
//    console.log(this.search);
//    if (this.search == "") {
//      tempList = this.listClient;
//    } else {
//      for (var i = 0; i < this.listClient.length; i++) {
//        if (this.listClient[i].getNom().indexOf(this.search) == 0) {
//            tempList.push(this.listClient[i]);
//        }
//      }
//    }
//    this.listClientAffiche = tempList;
  }
}
