import { Component, OnInit } from '@angular/core';
import { CompteService } from '../../../service/compte.service';


@Component({
  selector: 'app-view-list-compte',
  templateUrl: './view-list-compte.component.html',
  styleUrls: ['./view-list-compte.component.css']
})
export class ViewListCompteComponent implements OnInit {

  listCompte;
  constructor(private compteService: CompteService) { }

  ngOnInit() {
    this.compteService.getAll().subscribe(data => this.listCompte = data);
  }

}
