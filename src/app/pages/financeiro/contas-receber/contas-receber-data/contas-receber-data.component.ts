import { Component, OnInit } from '@angular/core';
import {ErrorHandlerService} from '../../../../core/error-handler.service';
import {TipoRecebimentoService} from '../../../cadastros/diversos/tipo-recebimento/tipo-recebimento.service';
import {GrupoService} from '../../../cadastros/diversos/grupo/grupo.service';
import {ClienteService} from '../../../cadastros/instancias/cliente/cliente.service';

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
  contas = [
    {label: '54.643-7', value: 1},
    {label: '7009-2', value: 2},
    {label: '8815-3', value: 3},
    {label: '13003891-3', value: 4}
  ];
  constructor(private errorHandler: ErrorHandlerService,
              private tipoRecebimentoService: TipoRecebimentoService,
              private grupoService: GrupoService,
              private clienteService: ClienteService) { }

  ngOnInit() {
    this.listarCategorias();
    this.listarGrupoRecebimento();
    this.listarClientes();

  }

  listarCategorias() {
    this.tipoRecebimentoService.listar().subscribe(tipos => this.categorias = tipos,
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
    // TODO ver como fica a questao da conta dentro da empresa
  }

}
