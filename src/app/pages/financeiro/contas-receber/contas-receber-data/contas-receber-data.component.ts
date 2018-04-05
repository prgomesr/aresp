import { Component, OnInit } from '@angular/core';

import { ErrorHandlerService } from '../../../../core/error-handler.service';
import { GrupoService } from '../../../cadastros/diversos/grupo/grupo.service';
import { ClienteService } from '../../../cadastros/instancias/cliente/cliente.service';
import { CategoriaRecebimentoService } from '../../../cadastros/diversos/categoria-recebimento/categoria-recebimento.service';
import {ContaCaixa, Empresa} from '../../../../core/model';
import {ContaCaixaService} from '../../../cadastros/diversos/conta-caixa/conta-caixa.service';
import {FormBuilder, FormGroup} from '@angular/forms';

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
  contas: ContaCaixa [];
  f: FormGroup;
  constructor(private errorHandler: ErrorHandlerService,
              private categoriaService: CategoriaRecebimentoService,
              private grupoService: GrupoService,
              private clienteService: ClienteService,
              private contaService: ContaCaixaService,
              private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.listarCategorias();
    this.listarGrupoRecebimento();
    this.listarClientes();
    this.listarContas();
    this.createForm();
  }

  listarCategorias() {
    this.categoriaService.listar().subscribe(tipos => this.categorias = tipos,
      err => this.errorHandler.handle(err));
  }

  listarGrupoRecebimento() {
    this.grupoService.listar().subscribe(grupos => this.gruposRecebimentos = grupos,
      err => this.errorHandler.handle(err));
  }

  listarClientes() {
    this.clienteService.listar().subscribe(clientes => this.clientes = clientes,
      err => this.errorHandler.handle(err));
  }

  listarContas() {
    this.contaService.listar().subscribe(dados => this.contas = dados,
      err => this.errorHandler.handle(err));
  }

  createForm() {
    this.f = this.formBuilder.group({
      id: [],
      descricao: '',
      competencia: '',
      vencimento: '',
      valor: '',
      periodo: '',
      ocorrencia: '',
      grupoRecebimento: this.formBuilder.group({
        id: [],
        nome: ''
      }),
      categoria: this.formBuilder.group({
        id: [],
        nome: ''
      }),
      conta: this.formBuilder.group({
        id: [],
        numero: ''
      }),
      cliente: this.formBuilder.group({
        id: [],
        nome: ''
      })
    });
  }

}
