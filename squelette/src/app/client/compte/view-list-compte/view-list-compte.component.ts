import { Component, OnInit } from '@angular/core';
import { CompteService } from '../../compte.service';

@Component({
  selector: 'app-view-list-compte',
  templateUrl: './view-list-compte.component.html',
  styleUrls: ['./view-list-compte.component.css']
})
export class ViewListCompteComponent implements OnInit {

  listCompte;
  constructor(private compteService: CompteService) { }

  ngOnInit() {
    this.listCompte = this.compteService.getAll();
     console.log(this.listCompte);
  }

}
