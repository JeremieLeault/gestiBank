import { Component, OnInit } from '@angular/core';
import { ConseillerService } from '../../conseiller/conseiller.service';

@Component({
  selector: 'app-search-admin',
  templateUrl: './search-admin.component.html',
  styleUrls: ['./search-admin.component.css']
})
export class SearchAdminComponent implements OnInit {

  private listConseiller;

  private search: string = "";

  constructor(private conseillerService : ConseillerService) { }

  ngOnInit() {
    this.listConseiller = this.conseillerService.getAll();
  }

  doSearch(){
    console.log(this.search);
    if (this.search == ""){
      this.listConseiller = this.conseillerService.getAll();
    }else{
      this.listConseiller = this.conseillerService.searchConseiller(this.search);
    }
  }
}
