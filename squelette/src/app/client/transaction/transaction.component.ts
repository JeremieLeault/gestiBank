import { OnInit, Component } from '@angular/core';
import { CompteService } from '../compte.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})

export class TransactionComponent implements OnInit {

  listCompte;
  constructor(private compteService: CompteService) { }

  ngOnInit() {
    this.listCompte = this.compteService.getAll();
     console.log(this.listCompte);
  }

}