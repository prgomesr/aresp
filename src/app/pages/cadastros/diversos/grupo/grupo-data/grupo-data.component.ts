import { Component, OnInit } from '@angular/core';
import { Grupo } from '../../../../../core/model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { ToastyService } from 'ng2-toasty';

import { GrupoService } from '../grupo.service';
import { ErrorHandlerService } from '../../../../../core/error-handler.service';

@Component({
  selector: 'app-grupo-data',
  templateUrl: './grupo-data.component.html',
  styleUrls: ['./grupo-data.component.css']
})
export class GrupoDataComponent implements OnInit {

  grupo = new Grupo();

  constructor(private grupoService: GrupoService,
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
    this.grupoService.salvar(this.grupo).subscribe(() => {
      this.toasty.success('Registro salvo com sucesso!');
      form.reset();
      this.grupo = new Grupo();
    }, err => this.errorHandler.handle(err));
  }

  atualizarDado(form: FormControl) {
    this.grupoService.editar(this.grupo).subscribe(dado => {
        this.grupo = dado;
        this.router.navigate(['/diversos/grupo']);
        this.toasty.success('Registro atualizado com sucesso!');
      },
      err => this.errorHandler.handle(err));
  }

  carregarDado(codigo: number) {
    this.grupoService.listarPorCodigo(codigo).subscribe(dado => this.grupo = dado,
      err => this.errorHandler.handle(err));
  }

  get editando(): any {
    return Boolean (this.grupo.id);
  }

}
