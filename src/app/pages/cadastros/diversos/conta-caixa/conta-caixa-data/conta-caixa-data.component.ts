import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl} from '@angular/forms';

import {ToastyService} from 'ng2-toasty';

import {EmpresaService} from '../../../instancias/empresa/empresa.service';
import {AgenciaService} from '../../agencia/agencia.service';
import {ErrorHandlerService} from '../../../../../core/error-handler.service';
import {ContaCaixaService} from '../conta-caixa.service';
import {ContaCaixa} from '../../../../../core/model';

@Component({
  selector: 'app-conta-caixa-data',
  templateUrl: './conta-caixa-data.component.html',
  styleUrls: ['./conta-caixa-data.component.css']
})
export class ContaCaixaDataComponent implements OnInit {

  tipos = [
    {label: 'Corrente', value: 'C'},
    {label: 'Poupança', value: 'P'}
  ];
  empresas = [];
  agencias = [];
  conta = new ContaCaixa();
  constructor(private empresaService: EmpresaService,
              private agenciaService: AgenciaService,
              private contaService: ContaCaixaService,
              private errorHandler: ErrorHandlerService,
              private route: ActivatedRoute,
              private router: Router,
              private toasty: ToastyService) { }

  ngOnInit() {
    this.listarEmpresas();
    this.listarAgencias();
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.carregarConta(id);
    }
  }

  listarEmpresas() {
    this.empresaService.listar().subscribe((dados:any) => this.empresas = dados.result
      .map(d => ({label: d.fantasia, value: d.id})),
      err => this.errorHandler.handle(err));
  }

  listarAgencias() {
    this.agenciaService.listar().subscribe((dados:any) => this.agencias = dados.result
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
    this.contaService.salvar(this.conta).subscribe(() => {
      this.toasty.success('Registro salvo com sucesso!');
      form.reset();
      this.conta = new ContaCaixa();
    }, err => this.errorHandler.handle(err));
  }

  atualizar(form: FormControl) {
    this.contaService.editar(this.conta).subscribe((dado:any) => {
        this.conta = dado.result;
        this.router.navigate(['/diversos/conta-caixa']);
        this.toasty.success('Registro atualizado com sucesso!');
      },
      err => this.errorHandler.handle(err));
  }

  carregarConta(codigo: number) {
    this.contaService.listarPorCodigo(codigo).subscribe((dado:any) => this.conta = dado.result,
      err => this.errorHandler.handle(err));
  }

  get editando(): any {
    return Boolean (this.conta.id);
  }
}
