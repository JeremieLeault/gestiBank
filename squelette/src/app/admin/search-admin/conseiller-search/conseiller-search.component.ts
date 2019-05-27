import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConseillerService } from '../../../service/conseiller.service';



@Component({
  selector: 'app-conseiller-search',
  templateUrl: './conseiller-search.component.html',
  styleUrls: ['./conseiller-search.component.css']
})
export class ConseillerSearchComponent implements OnInit {

    private id: string;
    conseiller; 

  constructor(private route: ActivatedRoute, private conseillerService: ConseillerService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
            this.id = params.id; });

    this.conseillerService.getConseiller(this.id).subscribe(data => this.conseiller = data);
    console.log(this.id);

  }

}
