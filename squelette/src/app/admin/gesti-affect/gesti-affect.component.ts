import { Component, OnInit } from '@angular/core';
import { ConseillerService } from '../../conseiller/conseiller.service';

@Component({
  selector: 'app-gesti-affect',
  templateUrl: './gesti-affect.component.html',
  styleUrls: ['./gesti-affect.component.css']
})
export class GestiAffectComponent implements OnInit {

  conseillerList;
  constructor( private conseillerService : ConseillerService) { }

  ngOnInit() {

    this.conseillerList = this.conseillerService.getAll();
    console.log(this.conseillerList);
  }

}
