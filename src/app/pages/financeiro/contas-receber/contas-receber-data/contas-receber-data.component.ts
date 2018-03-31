import { Component, OnInit } from '@angular/core';

import { ErrorHandlerService } from '../../../../core/error-handler.service';
import { GrupoService } from '../../../cadastros/diversos/grupo/grupo.service';
import { ClienteService } from '../../../cadastros/instancias/cliente/cliente.service';
import { CategoriaRecebimentoService } from '../../../cadastros/diversos/categoria-recebimento/categoria-recebimento.service';
import { EmpresaService } from '../../../cadastros/instancias/empresa/empresa.service';
import {Empresa} from '../../../../core/model';

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
  empresa = new Empresa();
  constructor(private errorHandler: ErrorHandlerService,
              private categoriaService: CategoriaRecebimentoService,
              private grupoService: GrupoService,
              private clienteService: ClienteService,
              private empresaService: EmpresaService) { }

  ngOnInit() {
    this.listarCategorias();
    this.listarGrupoRecebimento();
    this.listarClientes();
    this.listarContas();
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
    this.empresaService.listarPorCodigo(1).subscribe(empresa => this.empresa = empresa,
        err => this.errorHandler.handle(err));
  }

}
