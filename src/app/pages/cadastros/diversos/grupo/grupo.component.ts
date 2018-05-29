import { Component, OnInit } from '@angular/core';
import { GrupoService } from './grupo.service';

import { ErrorHandlerService } from '../../../../core/error-handler.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {

  grupos = [];
  cols = [
    {field: 'nome', header: 'Nome'}
  ];

  constructor(private grupoService: GrupoService,
              private errorHandler: ErrorHandlerService,
              private toasty: ToastyService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.grupoService.listar().subscribe((dados:any) => this.grupos = dados.result,
      err => this.errorHandler.handle(err));
  }

  excluir(codigo: number) {
    this.grupoService.excluir(codigo).subscribe(res => {
      this.toasty.success('Registro excluído com sucesso!');
      this.consultar();
    }, err => this.errorHandler.handle(err));
  }

}
