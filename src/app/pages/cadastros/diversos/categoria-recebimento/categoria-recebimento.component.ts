import { Component, OnInit } from '@angular/core';

import { ToastyService } from 'ng2-toasty';

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
              private errorHandler: ErrorHandlerService,
              private toasty: ToastyService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.categoriaService.listar().subscribe((dados:any) => {
        this.categorias = dados.result;
      },
      err => this.errorHandler.handle(err));
  }

  excluir(codigo: number) {
    this.categoriaService.excluir(codigo).subscribe(res => {
      this.toasty.success('Registro excluído com sucesso!');
      this.listar();
    }, err => this.errorHandler.handle(err));
  }

}
