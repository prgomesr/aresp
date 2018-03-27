import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import { ToastyService } from 'ng2-toasty';

import { CategoriaRecebimento } from '../../../../../core/model';
import { CategoriaRecebimentoService } from '../categoria-recebimento.service';
import { ErrorHandlerService } from '../../../../../core/error-handler.service';

@Component({
  selector: 'app-categoria-recebimento-data',
  templateUrl: './categoria-recebimento-data.component.html',
  styleUrls: ['./categoria-recebimento-data.component.css']
})
export class CategoriaRecebimentoDataComponent implements OnInit {

  categoria = new CategoriaRecebimento();

  constructor(private categoriaService: CategoriaRecebimentoService,
              private errorHandler: ErrorHandlerService,
              private toasty: ToastyService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.carregarCategoria(id);
    }
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarCategoria(form);
    } else {
      this.adicionarCategoria(form);
    }
  }

  adicionarCategoria(form: FormControl) {
    this.categoriaService.salvar(this.categoria).subscribe(() => {
      this.toasty.success('Registro salvo com sucesso!');
      form.reset();
      this.categoria = new CategoriaRecebimento();
    }, err => this.errorHandler.handle(err));
  }

  atualizarCategoria(form: FormControl) {
    this.categoriaService.editar(this.categoria).subscribe(categoria => {
        this.categoria = categoria;
        this.router.navigate(['/diversos/categoria-recebimento']);
        this.toasty.success('Registro atualizado com sucesso!');
      },
      err => this.errorHandler.handle(err));
  }

  carregarCategoria(codigo: number) {
    this.categoriaService.listarPorCodigo(codigo).subscribe(categoria => this.categoria = categoria,
      err => this.errorHandler.handle(err));
  }

  get editando(): any {
    return Boolean (this.categoria.id);
  }

}
