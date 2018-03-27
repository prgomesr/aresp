import { Component, OnInit } from '@angular/core';

import { CategoriaPagamentoService } from './categoria-pagamento.service';
import { ErrorHandlerService } from '../../../../core/error-handler.service';
import { ToastyService } from 'ng2-toasty';

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
              private errorHandler: ErrorHandlerService,
              private toasty: ToastyService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.categoriaPagamentoService.listar().subscribe(dados => this.categorias = dados,
      err => this.errorHandler.handle(err));
  }

  excluir(codigo: number) {
    this.categoriaPagamentoService.excluir(codigo).subscribe(res => {
      this.toasty.success('Registro excluído com sucesso!');
      this.consultar();
    }, err => this.errorHandler.handle(err));
  }

}
