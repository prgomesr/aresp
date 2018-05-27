import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastyService } from 'ng2-toasty';

import { Secretaria } from '../../../../../core/model';
import { SecretariaService } from '../secretaria.service';
import { ErrorHandlerService } from '../../../../../core/error-handler.service';

@Component({
  selector: 'app-secretaria-data',
  templateUrl: './secretaria-data.component.html',
  styleUrls: ['./secretaria-data.component.css']
})
export class SecretariaDataComponent implements OnInit {

  secretaria = new Secretaria();

  constructor(private dadoService: SecretariaService,
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
    this.dadoService.salvar(this.secretaria).subscribe(() => {
      this.toasty.success('Registro salvo com sucesso!');
      form.reset();
      this.secretaria = new Secretaria();
    }, err => this.errorHandler.handle(err));
  }

  atualizarDado(form: FormControl) {
    this.dadoService.editar(this.secretaria).subscribe((dado:any) => {
        this.secretaria = dado.result;
        this.router.navigate(['/diversos/secretaria']);
        this.toasty.success('Registro atualizado com sucesso!');
      },
      err => this.errorHandler.handle(err));
  }

  carregarDado(codigo: number) {
    this.dadoService.listarPorCodigo(codigo).subscribe((dado:any) => this.secretaria = dado.result,
      err => this.errorHandler.handle(err));
  }

  get editando(): any {
    return Boolean (this.secretaria.id);
  }

}
