import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { ToastyService } from 'ng2-toasty';

import { ErrorHandlerService } from '../../../../core/error-handler.service';
import { GrupoService } from '../../../cadastros/diversos/grupo/grupo.service';
import { ClienteService } from '../../../cadastros/instancias/cliente/cliente.service';
import { CategoriaRecebimentoService } from '../../../cadastros/diversos/categoria-recebimento/categoria-recebimento.service';
import { Recebimento } from '../../../../core/model';
import { ContaCaixaService } from '../../../cadastros/diversos/conta-caixa/conta-caixa.service';
import { ContasReceberService } from '../contas-receber.service';

@Component({
  selector: 'app-contas-receber-data',
  templateUrl: './contas-receber-data.component.html',
  styleUrls: ['./contas-receber-data.component.css']
})
export class ContasReceberDataComponent implements OnInit {

  clientes = [];
  categorias = [];
  periodos = [
    {label: 'Mensalmente', value: 1}
  ];
  gruposRecebimentos = [];
  contas = [];
  recebimento = new Recebimento();
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
  constructor(private errorHandler: ErrorHandlerService,
              private categoriaService: CategoriaRecebimentoService,
              private grupoService: GrupoService,
              private clienteService: ClienteService,
              private contaService: ContaCaixaService,
              private recebimentoService: ContasReceberService,
              private toasty: ToastyService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {

      this.carregarRecebimentoPorId(id);
    }
    this.listarCategorias();
    this.listarGrupoRecebimento();
    this.listarClientes();
    this.listarContas();
  }

  listarCategorias() {
    /*this.categoriaService.listar().subscribe(tipos => this.categorias = tipos
        .map(c => ({label: c.nome, value: c.id})),
      err => this.errorHandler.handle(err));*/
  }

  listarGrupoRecebimento() {
    this.grupoService.listar().subscribe(grupos => this.gruposRecebimentos = grupos
        .map(g => ({label: g.nome, value: g.id})),
      err => this.errorHandler.handle(err));
  }

  listarClientes() {
    this.clienteService.listar().subscribe(clientes => this.clientes = clientes
        .map(c => ({label: c.nome, value: c.id})),
      err => this.errorHandler.handle(err));
  }

  listarContas() {
    this.contaService.listar().subscribe(dados => this.contas = dados
        .map(c => ({label: c.numero, value: c.id})),
      err => this.errorHandler.handle(err));
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizar(form);
    } else {
      this.adicionar(form);
    }
  }

  adicionar(f: FormControl) {
    this.recebimentoService.salvar(this.recebimento).subscribe(() => {
      this.toasty.success('Registro salvo com sucesso!');
      f.reset();
      this.recebimento = new Recebimento();
    }, err => this.errorHandler.handle(err));
  }

  atualizar(form: FormControl) {
    this.recebimentoService.editar(this.recebimento).subscribe(dado => {
        this.recebimento = dado;
        this.router.navigate(['/financeiro/contas-receber']);
        this.toasty.success('Registro atualizado com sucesso!');
      },
      err => this.errorHandler.handle(err));
  }

  carregarRecebimentoPorId(id: number) {
    this.recebimentoService.listarPorCodigo(id).subscribe(dado => this.recebimento = dado,
      err => this.errorHandler.handle(err));
  }

  get editando(): any {
    return Boolean (this.recebimento.id);
  }

}
