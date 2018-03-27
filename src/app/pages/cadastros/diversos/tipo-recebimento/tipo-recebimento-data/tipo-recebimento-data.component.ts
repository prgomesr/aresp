import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastyService } from 'ng2-toasty';

import { TipoRecebimento } from '../../../../../core/model';
import { TipoRecebimentoService } from '../tipo-recebimento.service';
import { ErrorHandlerService } from '../../../../../core/error-handler.service';

@Component({
  selector: 'app-tipo-recebimento-data',
  templateUrl: './tipo-recebimento-data.component.html',
  styleUrls: ['./tipo-recebimento-data.component.css']
})
export class TipoRecebimentoDataComponent implements OnInit {

  tipo = new TipoRecebimento();

  constructor(private dadoService: TipoRecebimentoService,
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
    this.dadoService.salvar(this.tipo).subscribe(() => {
      this.toasty.success('Registro salvo com sucesso!');
      form.reset();
      this.tipo = new TipoRecebimento();
    }, err => this.errorHandler.handle(err));
  }

  atualizarDado(form: FormControl) {
    this.dadoService.editar(this.tipo).subscribe(dado => {
        this.tipo = dado;
        this.router.navigate(['/diversos/tipo-recebimento']);
        this.toasty.success('Registro atualizado com sucesso!');
      },
      err => this.errorHandler.handle(err));
  }

  carregarDado(codigo: number) {
    this.dadoService.listarPorCodigo(codigo).subscribe(dado => this.tipo = dado,
      err => this.errorHandler.handle(err));
  }

  get editando(): any {
    return Boolean (this.tipo.id);
  }

}
