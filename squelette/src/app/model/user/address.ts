export class Address {
    id_address: Number ; 
    rue: string ; 
    cp: string ; 
    ville: string ; 

    constructor(id_address: Number, rue: string, cp: string, ville: string) {
        this.id_address=id_address;
        this.rue=rue;
        this.cp=cp;
        this.ville=ville;

    }
}