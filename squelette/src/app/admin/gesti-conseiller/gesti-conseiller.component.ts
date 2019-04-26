import { Component, OnInit } from '@angular/core';
import { ConseillerService } from 'src/app/conseiller/conseiller.service';

@Component({
  selector: 'app-gesti-conseiller',
  templateUrl: './gesti-conseiller.component.html',
  styleUrls: ['./gesti-conseiller.component.css']
})
export class GestiConseillerComponent implements OnInit {

  constructor(private conseillerService: ConseillerService) { }

  ngOnInit() {
  }

  addNewConseiller(conseillerItem) {
    console.log(conseillerItem['mle']);

    const conseiller = {
      "mle": conseillerItem['mle'],
      "dateEmbauche": conseillerItem['dateEmbauche'],
      "nom": conseillerItem['nom'],
      "prenom": conseillerItem['prenom'],
      "email": conseillerItem['email'],
      "tel": conseillerItem['tel'],
      "adresse": conseillerItem['adresse'],
      "codePostale": conseillerItem['codePostale'],
      "ville": conseillerItem['ville']
    };    
    this.conseillerService.addConseiller(conseiller);
  }

}
