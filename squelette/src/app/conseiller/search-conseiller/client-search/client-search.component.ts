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


        this.compteService.getAllCptCli(this.id).subscribe(data => this.listeCompte = data);


    }

    getType(a) {
        var type;
        switch (a) {
            case "1": {type= 'Compte simple' ; break;}
            case "2" : {type= 'Compte avec autorisation de découvert' ; break;}
            case "3" : {type= 'Compte rénuméré' ; break; }
            default : {type= 'Pas de compte' ; break }
    }
    return type ; 
}

    getSituation() {
        
        var sit;
        switch (this.client.situation_perso) {
            
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
                sit = 'Situation matrimoniale non renseignée';
                break;
            }
        }
        return sit;
    }

    getNbEnfant() {
        if (this.client.nombreEnfant == null) {
           return 'Enfants non renseigné';
        } else {
            return  this.client.nombreEnfant + ' enfant(s)' ;
        }
    }

    getSalary() {
        if (this.client.salaire == null) {
            return 'Non renseigné';
        } else {
             return this.client.salaire + ' €' ;
        }
    }

    getNaissance() {
        if (this.client.dateNaissance == null) {
            return 'Non renseigné';
        } else {
             return this.client.dateNaissance; 
        }
    }
}
