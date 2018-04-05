import { Component, OnInit } from '@angular/core';
import {CategoriaPagamentoService} from '../../../cadastros/diversos/categoria-pagamento/categoria-pagamento.service';
import {ErrorHandlerService} from '../../../../core/error-handler.service';
import {FornecedorService} from '../../../cadastros/instancias/fornecedor/fornecedor.service';
import { ContaCaixa } from '../../../../core/model';
import {ContaCaixaService} from '../../../cadastros/diversos/conta-caixa/conta-caixa.service';

@Component({
  selector: 'app-contas-pagar-data',
  templateUrl: './contas-pagar-data.component.html',
  styleUrls: ['./contas-pagar-data.component.css']
})
export class ContasPagarDataComponent implements OnInit {

  categorias = [];
  fornecedores = [];
  contas: ContaCaixa [];
  periodos = [
    {label: 'Mensalmente', value: 1}
  ];
  constructor(private categoriaService: CategoriaPagamentoService,
              private fornecedorService: FornecedorService,
              private errorHandler: ErrorHandlerService,
              private contaService: ContaCaixaService) { }

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

  listarContas() {
    this.contaService.listar().subscribe(dados => this.contas = dados,
      err => this.errorHandler.handle(err));
  }

}
