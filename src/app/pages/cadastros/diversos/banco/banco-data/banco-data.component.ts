import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastyService } from 'ng2-toasty';

import { Banco } from '../../../../../core/model';
import { BancoService } from '../banco.service';
import { ErrorHandlerService } from '../../../../../core/error-handler.service';

@Component({
  selector: 'app-banco-data',
  templateUrl: './banco-data.component.html',
  styleUrls: ['./banco-data.component.css']
})
export class BancoDataComponent implements OnInit {

  banco = new Banco();

  constructor(private bancoService: BancoService,
              private errorHandler: ErrorHandlerService,
              private toasty: ToastyService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const idBanco = this.route.snapshot.params['id'];

    if (idBanco) {
      this.carregarBanco(idBanco);
    }
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarBanco(form);
    } else {
      this.adicionarBanco(form);
    }
  }

  adicionarBanco(form: FormControl) {
    this.bancoService.salvar(this.banco).subscribe(() => {
      this.toasty.success('Registro salvo com sucesso!');
      form.reset();
      this.banco = new Banco();
    }, err => this.errorHandler.handle(err));
  }

  atualizarBanco(form: FormControl) {
    this.bancoService.editar(this.banco).subscribe(banco => {
      this.banco = banco;
      this.router.navigate(['/diversos/banco']);
      this.toasty.success('Registro atualizado com sucesso!');
    },
      err => this.errorHandler.handle(err));
  }

  carregarBanco(codigo: number) {
  this.bancoService.listarPorCodigo(codigo).subscribe(dado => this.banco = dado,
    err => this.errorHandler.handle(err));
  }

  get editando(): any {
    return Boolean (this.banco.id);
  }

}
