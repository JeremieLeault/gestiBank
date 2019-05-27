import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../service/client.service';
import { Client } from '../../model/user/client';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private service:ClientService) { }

  ngOnInit() {
  }

  addClient(formClient){

    const tempClient = {
      "nom": formClient['user_lname'],
      "prenom":formClient['user_fname'],
      "dateNaissance":formClient['user_dob'],
      "dateDemande":1543964400000,
      "email":formClient['user_mail'],
      "tel":formClient['user_tel'],
      "situation_perso":formClient['user_status'],
      "salaire":formClient['user_salary']
    }
    console.log(tempClient);
    this.service.addClient(tempClient).subscribe(res => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });

  }
}
