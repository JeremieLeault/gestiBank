export class Client {
    
    id_client: Number;
    motDePasse: string;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    adresse: string;
    codePostal: Number;
    ville: string;
    situation_perso: string;
    nombreEnfant: Number;
    conseiller: Number;
    salaire: Number;
    dateNaissance: Date;
    typeCpt: string;
    dateDemande:Date;

    constructor(id_client:Number, motDePasse:string, nom:string, prenom:string, email:string, telephone:string, adresse, codePostal, ville, situation_perso:string, nombreEnfant, conseiller, dateNaissance:Date,salaire:Number) {
        this.id_client = id_client;
        this.motDePasse = motDePasse;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.telephone = telephone;
        this.adresse = adresse;
        this.codePostal = codePostal;
        this.ville = ville;
        this.situation_perso = situation_perso ;
        this.conseiller = conseiller;
        this.salaire = salaire ;
        this.dateNaissance = dateNaissance;
    }

    public getId(): Number {
        return this.id_client ;
    }
     public getNom(): string {
        return this.nom ;
    }

    public getPrenom(): string {
        return this.prenom ;
    }

    public getEmail(): string {
        return this.email ;
    }

    public getTelephone(): string {
        return this.telephone ;
    }

    public getNaissance(): Date {
        return this.dateNaissance ;
    }

    public getAdresse(): string {
        return this.adresse ;
    }

    public getCodePostal(): Number {
        return this.codePostal ;
    }

    public getVille(): string {
        return this.ville ;
    }

    public getSituation(): string {
        return this.situation_perso ;
    }

    public getSalaire(): Number {
        return this.salaire ;
    }

    public getTypeCpt(): string {
        return this.typeCpt ;
    }

    public getNombreEnfant(): Number {
        return this.nombreEnfant
    }

    public setSalaire(salaire: Number) {
        this.salaire = salaire ;
    }

    public setNom(nom: string) {
        this.nom = nom ;
    }
    public getDateDemande(): Date {
        return  this.dateDemande;
    }
}
