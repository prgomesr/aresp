import { Component, OnInit } from '@angular/core';
import { AgenciaService } from '../agencia.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastyService } from 'ng2-toasty';

import { ErrorHandlerService } from '../../../../../core/error-handler.service';
import { BancoService } from '../../banco/banco.service';
import {Agencia} from '../../../../../core/model';

@Component({
  selector: 'app-agencia-data',
  templateUrl: './agencia-data.component.html',
  styleUrls: ['./agencia-data.component.css']
})
export class AgenciaDataComponent implements OnInit {

  agencia = new Agencia();
  bancos = [];
  constructor(private agenciaService: AgenciaService,
              private errorHandler: ErrorHandlerService,
              private toasty: ToastyService,
              private route: ActivatedRoute,
              private bancoService: BancoService,
              private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.listarPorCodigo(id);
    }
    this.listarBancos();
  }

  listarPorCodigo(codigo: number) {
    this.agenciaService.listarPorCodigo(codigo).subscribe(dado => this.agencia = dado,
      err => this.errorHandler.handle(err));
  }

  listarBancos() {
    this.bancoService.listar().subscribe((dados:any)=>{

    });
    /*(dados:any[] => this.bancos = dados
      .map(d => ({label: d.nome, value: d.id})),
      err => this.errorHandler.handle(err)*/
  }

  get editando(): any {
    return Boolean (this.agencia.id);
  }

  salvar(f: FormControl) {
    if (this.editando) {
      this.atualizarAgencia(f);
    } else {
      this.adicionarAgencia(f);
    }
  }

  adicionarAgencia(f: FormControl) {
    this.agenciaService.salvar(this.agencia).subscribe(() => {
      this.toasty.success('Registro salvo com sucesso!');
      f.reset();
      // this.agencia = new Agencia();
    }, err => this.errorHandler.handle(err));
  }

  atualizarAgencia(f: FormControl) {
    this.agenciaService.editar(this.agencia).subscribe(dado => {
        this.agencia = dado;
        this.router.navigate(['/diversos/agencia']);
        this.toasty.success('Registro atualizado com sucesso!');
      },
      err => this.errorHandler.handle(err));
  }

}
