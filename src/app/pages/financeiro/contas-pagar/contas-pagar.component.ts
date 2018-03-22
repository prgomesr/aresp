import { Component, OnInit } from '@angular/core';

import { ContasPagarService } from './contas-pagar.service';
import { ErrorHandlerService } from '../../../core/error-handler.service';

@Component({
  selector: 'app-contas-pagar',
  templateUrl: './contas-pagar.component.html',
  styleUrls: ['./contas-pagar.component.css']
})
export class ContasPagarComponent implements OnInit {

  contas = [];
  periodos = [
    {label: 'Mês atual', value: 1},
    {label: 'Últimos 7 dias', value: 2},
    {label: 'Todos', value: 3},
  ];

  constructor(private pagamentoService: ContasPagarService,
              private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.pagamentoService.listar().subscribe(dados => this.contas = dados,
      err => this.errorHandler.handle(err));
  }

}
