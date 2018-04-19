import { Component, OnInit } from '@angular/core';
import {CategoriaPagamentoService} from '../../../cadastros/diversos/categoria-pagamento/categoria-pagamento.service';
import {ErrorHandlerService} from '../../../../core/error-handler.service';
import {FornecedorService} from '../../../cadastros/instancias/fornecedor/fornecedor.service';
import {Pagamento} from '../../../../core/model';
import { ContaCaixaService } from '../../../cadastros/diversos/conta-caixa/conta-caixa.service';
import {FormControl} from '@angular/forms';
import {ContasPagarService} from '../contas-pagar.service';
import {ToastyService} from 'ng2-toasty';
import {ActivatedRoute, Router} from '@angular/router';

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
              private contaService: ContaCaixaService,
              private pagamentoService: ContasPagarService,
              private toasty: ToastyService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.listarCategorias();
    this.listarFornecedores();
    this.listarContas();
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.carregarPagamento(id);
    }
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

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizar(form);
    } else {
      this.adicionar(form);
    }
  }

  adicionar(form: FormControl) {
    this.pagamentoService.salvar(this.pagamento).subscribe(() => {
      this.toasty.success('Registro salvo com sucesso!');
      form.reset();
      this.pagamento = new Pagamento();
    }, err => this.errorHandler.handle(err));
  }

  atualizar(form: FormControl) {
    this.pagamentoService.editar(this.pagamento).subscribe(dado => {
        this.pagamento = dado;
        this.router.navigate(['/financeiro/contas-pagar']);
        this.toasty.success('Registro atualizado com sucesso!');
      },
      err => this.errorHandler.handle(err));
  }

  carregarPagamento(codigo: number) {
    this.pagamentoService.listarPorCodigo(codigo).subscribe(dado => this.pagamento = dado,
      err => this.errorHandler.handle(err));
  }

  get editando(): any {
    return Boolean (this.pagamento.id);
  }

}
