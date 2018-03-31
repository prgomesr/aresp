import { Component, OnInit } from '@angular/core';
import { AgenciaService } from '../agencia.service';
import { ErrorHandlerService } from '../../../../../core/error-handler.service';
import { ToastyService } from 'ng2-toasty';
import { ActivatedRoute, Router } from '@angular/router';
import { BancoService } from '../../banco/banco.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Banco} from '../../../../../core/model';

@Component({
  selector: 'app-agencia-data',
  templateUrl: './agencia-data.component.html',
  styleUrls: ['./agencia-data.component.css']
})
export class AgenciaDataComponent implements OnInit {

  // agencia = new Agencia();
  formulario: FormGroup;
  default = 'Selecione:';
  bancos: Banco [];
  constructor(private agenciaService: AgenciaService,
              private errorHandler: ErrorHandlerService,
              private toasty: ToastyService,
              private route: ActivatedRoute,
              private bancoService: BancoService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.listarPorCodigo(id);
    }
    this.listarBancos();
    this.configurarFormulario();
  }

  listarPorCodigo(codigo: number) {
    this.agenciaService.listarPorCodigo(codigo).subscribe(dado => this.formulario.patchValue(dado),
      err => this.errorHandler.handle(err));
  }

  listarBancos() {
    this.bancoService.listar().subscribe(dados => this.bancos = dados,
      err => this.errorHandler.handle(err));
  }

  get editando(): any {
    return Boolean (this.formulario.get('id').value);
  }

  salvar() {
    if (this.editando) {
      this.atualizarAgencia();
    } else {
      this.adicionarAgencia();
      console.log(this.formulario.value);
    }
  }

  adicionarAgencia() {
    this.agenciaService.salvar(this.formulario.value).subscribe(() => {
      this.toasty.success('Registro salvo com sucesso!');
      this.formulario.reset();
      // this.agencia = new Agencia();
    }, err => this.errorHandler.handle(err));
  }

  atualizarAgencia() {
    this.agenciaService.editar(this.formulario.value).subscribe(dado => {
        // this.agencia = dado;
        this.formulario.patchValue(dado);
        this.router.navigate(['/diversos/agencia']);
        this.toasty.success('Registro atualizado com sucesso!');
      },
      err => this.errorHandler.handle(err));
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [],
      numero: [null, Validators.required],
      digito: [],
      telefone: [],
      gerente: [],
      banco: this.formBuilder.group({
        id: [null, Validators.required],
        nome: [],
      })
    });
  }

}
