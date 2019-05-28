import { Address } from './address';

export class Conseiller {
    mle: Number;
    dateEmbauche: String;
    nom: string;
    prenom: string;
    email: string;
    tel: string;
    address: Address;
    cp: Number;
    ville: string;

    //constructor 
    constructor(mle: Number, dateEmbauche: String, nom: string, prenom: string, email: string, tel: string, address: Address) {
        this.mle = mle;
        this.dateEmbauche = dateEmbauche;
        this.nom = nom
        this.prenom = prenom;
        this.email = email;
        this.tel = tel;
        this.address = address;
    }

}

