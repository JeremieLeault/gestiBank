import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/client/client.service';


@Component({
  selector: 'profil-form-ana-component',
  templateUrl: './profil-form-ana.component.html',
  styleUrls: ['./profil-form-ana.component.css']
})
export class ProfilFormAnaComponent implements OnInit {
 client;
    
  constructor(private clientserv: ClientService) { }

  ngOnInit() {
      this.client = this.clientserv.getClient() ; 
      console.log(this.client) ; 
  }

}
