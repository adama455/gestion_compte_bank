import { Comptes } from "./comptes";

export interface Operation {
    id: number;
    numOperation: string;
    amount: number;
    dateOperation: Date;
    typeOperation: string;
    compte: Comptes;
    //numCompteDestination: string;
    //numCompteSource: string;

}