import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../../service/client.service';
import { CompteService } from '../../../service/compte.service';



@Component({
    selector: 'app-client-search',
    templateUrl: './client-search.component.html',
    styleUrls: ['./client-search.component.css']
})
export class ClientSearchComponent implements OnInit {

    private id: string;
    client;
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
        console.log(this.id);

        this.clientService.getClient(this.id).subscribe(data => this.client = data);
        console.log(this.client);

        switch (this.client.getSituation()) {
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


        if (this.client.getNombreEnfant() == null) {
            this.nbEnfants = 'Non renseigné';
        } else { this.nbEnfants = this.client.nombreEnfant + ' enfant(s)' }

        if (this.client.salaire == null) {
            this.salaireClient = 'Non renseigné';
        } else { this.salaireClient = this.client.salaire + ' €' }

        if (this.client.getNaissance() == null) {
            this.naissanceClient = 'Non renseigné';
        } else { this.naissanceClient = this.client.getNaissance; }

        this.listeCompte = this.compteService.getAll();


    }


}
