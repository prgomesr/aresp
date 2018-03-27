import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { ToastyService } from 'ng2-toasty';

import { StatusParcela } from '../../../../../core/model';
import { StatusParcelaService } from '../status-parcela.service';
import { ErrorHandlerService } from '../../../../../core/error-handler.service';

@Component({
  selector: 'app-status-parcela-data',
  templateUrl: './status-parcela-data.component.html',
  styleUrls: ['./status-parcela-data.component.css']
})
export class StatusParcelaDataComponent implements OnInit {

  statusParcela = new StatusParcela();

  constructor(private dadoService: StatusParcelaService,
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
    this.dadoService.salvar(this.statusParcela).subscribe(() => {
      this.toasty.success('Registro salvo com sucesso!');
      form.reset();
      this.statusParcela = new StatusParcela();
    }, err => this.errorHandler.handle(err));
  }

  atualizarDado(form: FormControl) {
    this.dadoService.editar(this.statusParcela).subscribe(dado => {
        this.statusParcela = dado;
        this.router.navigate(['/diversos/status-parcela']);
        this.toasty.success('Registro atualizado com sucesso!');
      },
      err => this.errorHandler.handle(err));
  }

  carregarDado(codigo: number) {
    this.dadoService.listarPorCodigo(codigo).subscribe(dado => this.statusParcela = dado,
      err => this.errorHandler.handle(err));
  }

  get editando(): any {
    return Boolean (this.statusParcela.id);
  }

}
