import { Component, OnInit } from '@angular/core';
import { ConseillerService } from '../conseiller.service';

@Component({
  selector: 'app-search-conseiller',
  templateUrl: './search-conseiller.component.html',
  styleUrls: ['./search-conseiller.component.css']
})
export class SearchConseillerComponent implements OnInit {


  private listClient;
  private search:string ="";
  constructor(private conseillerService : ConseillerService) { }

  ngOnInit() {
    this.listClient = this.conseillerService.getAll();
  }

  doSearch(){
    console.log(this.search);
    if (this.search == ""){
      this.listClient = this.conseillerService.getAll();
    }else{
      this.listClient = this.conseillerService.searchConseiller(this.search);
    }
  }
}
