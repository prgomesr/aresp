import { Component, OnInit } from '@angular/core';
import {ClienteService} from './cliente.service';
import {ErrorHandlerService} from '../../../../core/error-handler.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes = [];

  constructor(private clienteService: ClienteService,
              private errorHandler: ErrorHandlerService) {}

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.clienteService.listar().subscribe(clientes => this.clientes = clientes,
      err => this.errorHandler.handle(err));
  }

}
