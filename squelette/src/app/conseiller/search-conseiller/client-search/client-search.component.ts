import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Client } from '../../../client/client';
import { ClientService } from '../../../client/client.service';
import { CompteService } from '../../../client/compte.service';


@Component({
    selector: 'app-client-search',
    templateUrl: './client-search.component.html',
    styleUrls: ['./client-search.component.css']
})
export class ClientSearchComponent implements OnInit {

    private id: string;
    client: Client;
    listeCompte;

    constructor(private route: ActivatedRoute, private clientService: ClientService, private compteService: CompteService) {

    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params.id;
        })
        console.log(this.id);

        this.getClient();

        this.listeCompte = this.compteService.getAll();


    }

    getClient(){
        this.clientService.getClient(this.id).subscribe(data => this.client = data);
    }

    getSituation():string{
        console.log(this.client);

        var situation:string;
        switch (this.client.situation_perso) {
            case '1': {
                situation = 'Célibataire';
                break;
            }
            case '2': {
                situation = 'Marié(e)';
                break;
            }
            case '3': {
                situation = 'Concubinage';
                break;
            }
            case '4': {
                situation = 'Divorcé(e)';
                break;
            }
            case '5': {
                situation = 'Veuf';
                break;
            }
            default: {
                situation = 'Non renseignée';
                break;
            }
        }
        return situation ;
    }

    getEnfant(){
        if(this.client.nombreEnfant == null){
            return 'Non renseigné';
        }else {
            return this.client.nombreEnfant;
        }
    }

    getSalaire(){
        if(this.client.salaire == null){
            return 'Non renseigné';
        }else {
            return this.client.salaire;
        }
    }

    getNaissance(){
        if(this.client.dateNaissance == null){
            return 'Non renseigné';
        }else {
            return this.client.dateNaissance;
        }
    }
}
