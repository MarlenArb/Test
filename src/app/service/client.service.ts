import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Client } from '../modal/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl: string = "http://localhost:8080/brisa/client";
  headers = new HttpHeaders({ 'Content-Type': 'application/json;' });

  constructor(private _http: HttpClient) { }


  //GET operations
  getCliente0(): Observable<Client[]> {
    return this._http.get<Client[]>(`${this.baseUrl}/getClients/Cliente 0`, { headers: this.headers }).pipe(
      catchError(error => throwError(error))
    )
  }

  getClientsContainingName(name: string): Observable<Client[]> {
    return this._http.get<Client[]>(`${this.baseUrl}/getClientsContaining/${name}`, { headers: this.headers }).pipe(
      catchError(error => throwError(error))
    )
  }

  getAllClientSort(): Observable<Client[]> {
    return this._http.get<Client[]>(`${this.baseUrl}/getAllSort`, { headers: this.headers }).pipe(
      catchError(error => throwError(error))
    )
  }

  getAllIdIsPair(): Observable<Client[]> {
    return this._http.get<Client[]>(`${this.baseUrl}/getAllIdIsPair`, { headers: this.headers }).pipe(
      catchError(error => throwError(error))
    )
  }

  //POST operations
  saveClient0(): Observable<Client> {
    return this._http.post<Client>(`${this.baseUrl}/saveClient0`, { headers: this.headers }).pipe(
      catchError(error => throwError(error))
    )
  }

  saveUser(client: Client): Observable<Client> {
    return this._http.post<Client>(`${this.baseUrl}/saveClient`, client, { headers: this.headers }).pipe(
      catchError(error => throwError(error))
    )
  }

  //DELETE operations
  deleteClient(id: number): Observable<Client> {
    return this._http.delete<Client>(`${this.baseUrl}/deleteClient/${id}`, { headers: this.headers }).pipe(
      catchError(error => throwError(error))
    )
  }

  //PUT operations
  updateClient(id: number, updatedClient: Client): Observable<Client> {
    return this._http.put<Client>(`${this.baseUrl}/updateClient/${id}`, updatedClient, { headers: this.headers }).pipe(
      catchError(error => throwError(error))
    )
  }

}
