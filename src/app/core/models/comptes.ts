import { Client } from "./client";
import { Operation } from "./operation";

export interface Comptes {
    id: number;
    numCompte: string;
    devis: string;
    balance: number;
    decouvert: number;
    tauxInteret: number;
    createdAt: Date;
    status: any;
    client: Client;
    operation?: Array<Operation>
}