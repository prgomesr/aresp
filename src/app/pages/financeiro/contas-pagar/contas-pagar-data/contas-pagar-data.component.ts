import { Component, OnInit } from '@angular/core';
import {CategoriaPagamentoService} from '../../../cadastros/diversos/categoria-pagamento/categoria-pagamento.service';
import {ErrorHandlerService} from '../../../../core/error-handler.service';
import {FornecedorService} from '../../../cadastros/instancias/fornecedor/fornecedor.service';
import { Pagamento } from '../../../../core/model';
import { ContaCaixaService } from '../../../cadastros/diversos/conta-caixa/conta-caixa.service';

@Component({
  selector: 'app-contas-pagar-data',
  templateUrl: './contas-pagar-data.component.html',
  styleUrls: ['./contas-pagar-data.component.css']
})
export class ContasPagarDataComponent implements OnInit {

  categorias = [];
  fornecedores = [];
  contas = [];
  pagamento = new Pagamento();
  periodos = [
    {label: 'Mensalmente', value: 1}
  ];
  pt = {
    firstDayOfWeek: 0,
    dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    dayNamesShort: ["D", "S", "T", "Q", "Q", "S", "S"],
    dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
    monthNames: [ "Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro" ],
    monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
    today: 'Hoje',
    clear: 'Limpar'
  };
  constructor(private categoriaService: CategoriaPagamentoService,
              private fornecedorService: FornecedorService,
              private errorHandler: ErrorHandlerService,
              private contaService: ContaCaixaService) { }

  ngOnInit() {
    this.listarCategorias();
    this.listarFornecedores();
    this.listarContas();
  }

  listarCategorias() {
    this.categoriaService.listar().subscribe(dados => this.categorias = dados
        .map(d => ({label: d.nome, value: d.id})),
      err => this.errorHandler.handle(err));
  }

  listarFornecedores() {
    this.fornecedorService.listar().subscribe(dados => this.fornecedores = dados
        .map(d => ({label: d.fantasia, value: d.id})),
      err => this.errorHandler.handle(err));
  }

  listarContas() {
    this.contaService.listar().subscribe(dados => this.contas = dados
        .map(d => ({label: d.numero, value: d.id})),
      err => this.errorHandler.handle(err));
  }

}
