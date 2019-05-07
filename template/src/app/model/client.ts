export class Client {

    id: Number;
    motDePasse: string;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    adresse: string;
    codePostal: Number;
    ville: string;
    situation: string;
    nombreEnfant: Number;
    conseiller: Number;
    salaire: Number;
    naissance: string;
    typeCpt: string;

    constructor(id, motDePasse, nom, prenom, email, telephone, adresse, codePostal, ville, situation, nombreEnfant, conseiller) {
        this.id = id;
        this.motDePasse = motDePasse;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.telephone = telephone;
        this.adresse = adresse;
        this.codePostal = codePostal;
        this.ville = ville;
        this.situation = "5";
        this.conseiller = conseiller;
        this.salaire = 5000;
        this.naissance = "2000-10-01";
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

    public getNaissance(): string {
        return this.naissance ;
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
        return this.situation ;
    }

    public getSalaire(): Number {
        return this.salaire ;
    }

        public getTypeCpt(): string {
        return this.typeCpt ;
    }

    public setSalaire(salaire: Number) {
        this.salaire = salaire ;
    }

        public setNom(nom: string) {
        this.nom = nom ;
    }
}


