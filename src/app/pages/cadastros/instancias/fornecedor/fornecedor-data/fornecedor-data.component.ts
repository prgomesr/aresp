import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastyService } from 'ng2-toasty';

import { Fornecedor } from '../../../../../core/model';
import { FornecedorService } from '../fornecedor.service';
import { ErrorHandlerService } from '../../../../../core/error-handler.service';

@Component({
  selector: 'app-fornecedor-data',
  templateUrl: './fornecedor-data.component.html',
  styleUrls: ['./fornecedor-data.component.css']
})
export class FornecedorDataComponent implements OnInit {

  fornecedor = new Fornecedor();

  constructor(private dadoService: FornecedorService,
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
    this.dadoService.salvar(this.fornecedor).subscribe(() => {
      this.toasty.success('Registro salvo com sucesso!');
      form.reset();
      this.fornecedor = new Fornecedor();
    }, err => this.errorHandler.handle(err));
  }

  atualizarDado(form: FormControl) {
    this.dadoService.editar(this.fornecedor).subscribe(dado => {
        this.fornecedor = dado;
        this.router.navigate(['/instancias/fornecedor']);
        this.toasty.success('Registro atualizado com sucesso!');
      },
      err => this.errorHandler.handle(err));
  }

  carregarDado(codigo: number) {
    this.dadoService.listarPorCodigo(codigo).subscribe(dado => this.fornecedor = dado,
      err => this.errorHandler.handle(err));
  }

  get editando(): any {
    return Boolean(this.fornecedor.id);
  }

}
