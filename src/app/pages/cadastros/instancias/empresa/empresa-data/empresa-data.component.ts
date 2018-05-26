import { Component, OnInit } from '@angular/core';
import {Empresa} from '../../../../../core/model';
import {EmpresaService} from '../empresa.service';
import {ToastyService} from 'ng2-toasty';
import {ErrorHandlerService} from '../../../../../core/error-handler.service';
import {FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-empresa-data',
  templateUrl: './empresa-data.component.html',
  styleUrls: ['./empresa-data.component.css']
})
export class EmpresaDataComponent implements OnInit {
  empresa = new Empresa();
  constructor(private empresaService: EmpresaService,
              private toasty: ToastyService,
              private errorHandler: ErrorHandlerService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.carregar(id);
    }
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizar(form);
    } else {
      this.adicionar(form);
    }
  }

  adicionar(form: FormControl) {
    this.empresaService.salvar(this.empresa).subscribe(() => {
      this.toasty.success('Registro salvo com sucesso!');
      form.reset();
      this.empresa = new Empresa();
    }, err => this.errorHandler.handle(err));
  }

  atualizar(form: FormControl) {
    this.empresaService.editar(this.empresa).subscribe((dado:any) => {
        this.empresa = dado;
        this.router.navigate(['/instancias/empresa']);
        this.toasty.success('Registro atualizado com sucesso!');
      },
      err => this.errorHandler.handle(err));
  }

  carregar(codigo: number) {
    this.empresaService.listarPorCodigo(codigo).subscribe((dado:any) => {
        this.empresa = dado.result;
      },
      err => this.errorHandler.handle(err));
  }

  get editando(): any {
    return Boolean(this.empresa.id);
  }

}
