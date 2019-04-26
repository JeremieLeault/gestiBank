import { Component, OnInit } from '@angular/core';
import { CompteService } from 'src/app/client/compte.service';


@Component({
  selector: 'app-affichercomptes',
  templateUrl: './affichercomptes.component.html',
  styleUrls: ['./affichercomptes.component.scss']
})
export class AffichercomptesComponent implements OnInit {
    listCompte;
  constructor(private compteService: CompteService) { }

  ngOnInit() {
     this.listCompte = this.compteService.getAll();
     console.log(this.listCompte);
  }

}
