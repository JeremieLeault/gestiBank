import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Client } from '../../../client/client';
import { ClientService } from '../../../client/client.service';
import { CompteService } from 'src/app/client/compte.service';

@Component({
    selector: 'app-client-search',
    templateUrl: './client-search.component.html',
    styleUrls: ['./client-search.component.css']
})
export class ClientSearchComponent implements OnInit {

    private id: Number;
    client: Client;
    situationmatri: string;
    nbEnfants: any;
    salaireClient: any;
    naissanceClient: any;
    listeCompte;

    constructor(private route: ActivatedRoute, private clientService: ClientService, private compteService: CompteService) {

    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params.id;
        });

        this.client = this.clientService.getClient(this.id);


        switch (this.client.situation) {
            case '1': {
                this.situationmatri = 'Célibataire';
                break;
            }
            case '2': {
                this.situationmatri = 'Marié(e)';
                break;
            }
            case '3': {
                this.situationmatri = 'Concubinage';
                break;
            }
            case '4': {
                this.situationmatri = 'Divorcé(e)';
                break;
            }
            case '5': {
                this.situationmatri = 'Veuf';
                break;
            }
            default: {
                this.situationmatri = 'Non renseignée';
                break;
            }
        }

        if (this.client.nombreEnfant == null) {
            this.nbEnfants = 'Non renseigné';
        } else { this.nbEnfants = this.client.nombreEnfant + ' enfant(s)' }

        if (this.client.salaire == null) {
            this.salaireClient = 'Non renseigné';
        } else { this.salaireClient = this.client.salaire + ' €' }

        if (this.client.naissance == null) {
            this.naissanceClient = 'Non renseigné';
        } else { this.naissanceClient = this.client.naissance; }

        this.listeCompte = this.compteService.getAll();


    }


}
