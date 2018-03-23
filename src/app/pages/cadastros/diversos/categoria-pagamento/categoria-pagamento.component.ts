import { Component, OnInit } from '@angular/core';

import { CategoriaPagamentoService } from './categoria-pagamento.service';
import { ErrorHandlerService } from '../../../../core/error-handler.service';

@Component({
  selector: 'app-categoria-pagamento',
  templateUrl: './categoria-pagamento.component.html',
  styleUrls: ['./categoria-pagamento.component.css']
})
export class CategoriaPagamentoComponent implements OnInit {

  categorias = [];
  cols = [
    {field: 'nome', header: 'Nome'}
  ];
  constructor(private categoriaPagamentoService: CategoriaPagamentoService,
              private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.categoriaPagamentoService.listar().subscribe(dados => this.categorias = dados,
      err => this.errorHandler.handle(err));
  }

}
