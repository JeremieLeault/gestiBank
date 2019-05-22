import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client/client.service';

@Component({
  selector: 'app-search-conseiller',
  templateUrl: './search-conseiller.component.html',
  styleUrls: ['./search-conseiller.component.css']
})
export class SearchConseillerComponent implements OnInit {


  private listClient;
  private search:string ="";
  constructor(private clientService : ClientService) { }

  ngOnInit() {
    this.listClient = this.clientService.getAll();
    console.log(this.listClient);
  }

  doSearch(){
    console.log(this.search);
    if (this.search == ""){
      this.listClient = this.clientService.getAll();
    }else{
      this.listClient = this.clientService.searchConseiller(this.search);
    }
  }
}
