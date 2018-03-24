import { Component, OnInit } from '@angular/core';

import { CategoriaRecebimentoService } from './categoria-recebimento.service';
import { ErrorHandlerService } from '../../../../core/error-handler.service';

@Component({
  selector: 'app-categoria-recebimento',
  templateUrl: './categoria-recebimento.component.html',
  styleUrls: ['./categoria-recebimento.component.css']
})
export class CategoriaRecebimentoComponent implements OnInit {

  categorias = [];
  cols = [
    {field: 'nome', header: 'Nome'}
  ];

  constructor(private categoriaService: CategoriaRecebimentoService,
              private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.categoriaService.listar().subscribe(dados => this.categorias = dados,
      err => this.errorHandler.handle(err));
  }

}
