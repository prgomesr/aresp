import { Component, OnInit } from '@angular/core';
import { TipoSocioService } from './tipo-socio.service';

import { ErrorHandlerService } from '../../../../core/error-handler.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-tipo-socio',
  templateUrl: './tipo-socio.component.html',
  styleUrls: ['./tipo-socio.component.css']
})
export class TipoSocioComponent implements OnInit {

  dados = [];
  cols = [
    {field: 'nome', header: 'Nome'}
  ];
  constructor(private tipoSocioService: TipoSocioService,
              private errorHandler: ErrorHandlerService,
              private toasty: ToastyService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar () {
    this.tipoSocioService.listar().subscribe(dados => this.dados = dados,
      err => this.errorHandler.handle(err));
  }

  excluir(codigo: number) {
    this.tipoSocioService.excluir(codigo).subscribe(res => {
      this.toasty.success('Registro excluído com sucesso!');
      this.consultar();
    }, err => this.errorHandler.handle(err));
  }

}
