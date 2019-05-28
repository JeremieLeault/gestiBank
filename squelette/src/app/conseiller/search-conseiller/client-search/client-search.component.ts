import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../../service/client.service';
import { CompteService } from '../../../service/compte.service';
import { SIGTERM } from 'constants';



@Component({
    selector: 'app-client-search',
    templateUrl: './client-search.component.html',
    styleUrls: ['./client-search.component.css']
})
export class ClientSearchComponent implements OnInit {

    private id: string;
    client;
    listeCompte;

    constructor(private route: ActivatedRoute, private clientService: ClientService, private compteService: CompteService) {

    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params.id;
        });
        console.log(this.id);

        this.clientService.getClient(this.id).subscribe(data => this.client = data);
        console.log(this.client);


        this.listeCompte = this.compteService.getAll();


    }

    getSituation(situation){
        
        var sit;
        switch (situation) {
            
            case '1': {
                sit= 'Célibataire';
                break;
            }
            case '2': {
                sit = 'Marié(e)';
                break;
            }
            case '3': {
                sit = 'Concubinage';
                break;
            }
            case '4': {
               sit = 'Divorcé(e)';
                break;
            }
            case '5': {
                sit = 'Veuf';
                break;
            }
            default: {
                sit = 'Non renseignée';
                break;
            }
        }
        return sit;
    }

    getNbEnfant(){
        if (this.client.nombreEnfant == null) {
           return 'Non renseigné';
        } else {
            return  this.client.nombreEnfant + ' enfant(s)' ;
        }
    }

    getSalary(){
        if (this.client.salaire == null) {
            return 'Non renseigné';
        } else {
             return this.client.salaire + ' €' ;
        }
    }

    getNaissance(){
        if (this.client.getNaissance() == null) {
            return 'Non renseigné';
        } else {
             return this.client.getNaissance; 
        }
    }

}
