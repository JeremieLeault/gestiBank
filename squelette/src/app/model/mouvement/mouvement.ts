export class Mouvement {
  [x: string]: any;

    montant: number;
    date: Date;
    libelle: string;
    compte: number;

    constructor(compte: number, montant:number, libelle: string, date : Date){
        this.compte = compte;
        this.montant = montant;
        this.libelle = libelle;
        this.date = date;
    }

    getMontant(){
        return this.montant;
    }

    getDate(){
        return this.date;
    }

    getLibelle(){
        return this.libelle;
    }

    getCompte(){
        return this.compte;
    }
}
