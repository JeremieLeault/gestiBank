import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/client/client.service';


@Component({
  selector: 'form-ana-component',
  templateUrl: './form-ana.component.html',
  styleUrls: ['./form-ana.component.css']
})
export class FormAnaComponent implements OnInit {
 client;
    
  constructor(private clientserv: ClientService) { }

  ngOnInit() {
      this.client = this.clientserv.getClient() ; 
      console.log(this.client) ; 
  }

}
