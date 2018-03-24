import { Component, OnInit } from '@angular/core';
import {CategoriaPagamentoService} from '../../../cadastros/diversos/categoria-pagamento/categoria-pagamento.service';
import {ErrorHandlerService} from '../../../../core/error-handler.service';
import {FornecedorService} from '../../../cadastros/instancias/fornecedor/fornecedor.service';

@Component({
  selector: 'app-contas-pagar-data',
  templateUrl: './contas-pagar-data.component.html',
  styleUrls: ['./contas-pagar-data.component.css']
})
export class ContasPagarDataComponent implements OnInit {

  categorias = [];
  fornecedores = [];
  contas = [
    {label: '54.643-7', value: 1},
    {label: '7009-2', value: 2},
    {label: '8815-3', value: 3},
    {label: '13003891-3', value: 4}
    ];
  periodos = [
    {label: 'Mensalmente', value: 1}
  ];
  constructor(private categoriaService: CategoriaPagamentoService,
              private fornecedorService: FornecedorService,
              private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.listarCategorias();
    this.listarFornecedores();
  }

  listarCategorias() {
    this.categoriaService.listar().subscribe(dados => this.categorias = dados,
      err => this.errorHandler.handle(err));
  }

  listarFornecedores() {
    this.fornecedorService.listar().subscribe(dados => this.fornecedores = dados,
      err => this.errorHandler.handle(err));
  }

}
