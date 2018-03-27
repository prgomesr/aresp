import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { ToastyService } from 'ng2-toasty';

import { Operadora } from '../../../../../core/model';
import { OperadoraService } from '../operadora.service';
import { ErrorHandlerService } from '../../../../../core/error-handler.service';

@Component({
  selector: 'app-operadora-data',
  templateUrl: './operadora-data.component.html',
  styleUrls: ['./operadora-data.component.css']
})
export class OperadoraDataComponent implements OnInit {

  operadora = new Operadora();

  constructor(private dadoService: OperadoraService,
              private errorHandler: ErrorHandlerService,
              private toasty: ToastyService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.carregarDado(id);
    }
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarDado(form);
    } else {
      this.adicionarDado(form);
    }
  }

  adicionarDado(form: FormControl) {
    this.dadoService.salvar(this.operadora).subscribe(() => {
      this.toasty.success('Registro salvo com sucesso!');
      form.reset();
      this.operadora = new Operadora();
    }, err => this.errorHandler.handle(err));
  }

  atualizarDado(form: FormControl) {
    this.dadoService.editar(this.operadora).subscribe(dado => {
        this.operadora = dado;
        this.router.navigate(['/diversos/operadora']);
        this.toasty.success('Registro atualizado com sucesso!');
      },
      err => this.errorHandler.handle(err));
  }

  carregarDado(codigo: number) {
    this.dadoService.listarPorCodigo(codigo).subscribe(dado => this.operadora = dado,
      err => this.errorHandler.handle(err));
  }

  get editando(): any {
    return Boolean (this.operadora.id);
  }

}
