import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ErrorHandlerService } from '../../../../../core/error-handler.service';
import { ToastyService } from 'ng2-toasty';
import { CategoriaPagamento } from '../../../../../core/model';
import { CategoriaPagamentoService } from '../categoria-pagamento.service';

@Component({
  selector: 'app-categoria-pagamento-data',
  templateUrl: './categoria-pagamento-data.component.html',
  styleUrls: ['./categoria-pagamento-data.component.css']
})
export class CategoriaPagamentoDataComponent implements OnInit {

  categoria = new CategoriaPagamento();
  constructor(private categoriaService: CategoriaPagamentoService,
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
      this.categoria = new CategoriaPagamento();
    }, err => this.errorHandler.handle(err));
  }

  atualizarCategoria(form: FormControl) {
    this.categoriaService.editar(this.categoria).subscribe(banco => {
        this.categoria = banco;
        this.router.navigate(['/diversos/categoria-pagamento']);
        this.toasty.success('Registro atualizado com sucesso!');
      },
      err => this.errorHandler.handle(err));
  }

  carregarCategoria(codigo: number) {
    this.categoriaService.listarPorCodigo(codigo).subscribe(dado => this.categoria = dado,
      err => this.errorHandler.handle(err));
  }

  get editando(): any {
    return Boolean (this.categoria.id);
  }

}
