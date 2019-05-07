import { Mouvement } from "./mouvement";

export class Depot extends Mouvement{
   
    constructor(compte: number, montant:number, libelle: string, date : Date){
        super(compte, montant, libelle, date)
     }
     
}
