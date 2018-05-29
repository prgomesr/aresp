import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { ToastyService } from 'ng2-toasty';

import { Convenio} from '../../../../../core/model';
import { ConvenioService } from '../convenio.service';
import { ErrorHandlerService } from '../../../../../core/error-handler.service';
import {ContaCaixaService} from '../../conta-caixa/conta-caixa.service';

@Component({
  selector: 'app-convenio-data',
  templateUrl: './convenio-data.component.html',
  styleUrls: ['./convenio-data.component.css']
})
export class ConvenioDataComponent implements OnInit {

  convenio = new Convenio();
  contas = [];
  constructor(private convenioService: ConvenioService,
              private contaService: ContaCaixaService,
              private errorHandler: ErrorHandlerService,
              private toasty: ToastyService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.carregarDado(id);
    }
    this.listarContas();
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarDado(form);
    } else {
      this.adicionarDado(form);
    }
  }

  adicionarDado(form: FormControl) {
    this.convenioService.salvar(this.convenio).subscribe(() => {
      this.toasty.success('Registro salvo com sucesso!');
      form.reset();
      this.convenio = new Convenio();
    }, err => this.errorHandler.handle(err));
  }

  atualizarDado(form: FormControl) {
    this.convenioService.editar(this.convenio).subscribe((dado:any) => {
        this.convenio = dado.result;
        this.router.navigate(['/diversos/convenio']);
        this.toasty.success('Registro atualizado com sucesso!');
      },
      err => this.errorHandler.handle(err));
  }

  carregarDado(codigo: number) {
    this.convenioService.listarPorCodigo(codigo).subscribe((dado:any) => this.convenio = dado.result,
      err => this.errorHandler.handle(err));
  }

  listarContas() {
    this.contaService.listar().subscribe((dados:any) => this.contas = dados.result
        .map(d => ({label: d.numero, value: d.id})),
      err => this.errorHandler.handle(err));
  }

  get editando(): any {
    return Boolean (this.convenio.id);
  }

}
