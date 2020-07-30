import { Component } from '@angular/core';
import { ClientService } from './service/client.service';
import { Client } from './modal/client';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'brisaEjemploAngular';

  searchClient: string = "";
  selectedClientId: number;

  client: Client = new Client();
  clients: Client[] = [];

  constructor(private _clientService: ClientService) { }

  getClient0() {
    this._clientService.getCliente0().subscribe(
      response => this.clients = response
    )
  }

  getClientsContainingName() {
    this._clientService.getClientsContainingName(this.searchClient).subscribe(
      response => this.clients = response
    )
  }

  getAllClientsSort() {
    this._clientService.getAllClientSort().subscribe(
      response => this.clients = response
    )
  }

  getAllIdIsPair() {
    this._clientService.getAllIdIsPair().subscribe(
      response => this.clients = response
    )
  }

  saveClient0() {
    this._clientService.saveClient0().subscribe();
  }

  saveUser() {
    console.log(this.client)
    this._clientService.saveUser(this.client).subscribe();
  }

  deleteClient() {
    console.log(this.selectedClientId)
    this._clientService.deleteClient(this.selectedClientId).subscribe()
  }

  updateClient() {
    this.client.id = null;
    this._clientService.updateClient(this.selectedClientId, this.client).subscribe()
  }

}
