import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private urlApi=" http://localhost:8080";

  constructor(private http: HttpClient) { }

  /**
   * getAllClients
   */

  public getAllClient():Observable<Client[]>{
    return this.http.get<Client[]>(this.urlApi + "/clients");
  }
}
