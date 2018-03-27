import { Component, OnInit } from '@angular/core';

import { StatusParcelaService } from './status-parcela.service';
import { ErrorHandlerService } from '../../../../core/error-handler.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-status-parcela',
  templateUrl: './status-parcela.component.html',
  styleUrls: ['./status-parcela.component.css']
})
export class StatusParcelaComponent implements OnInit {

  dados = [];
  cols = [
    {field: 'situacao', header: 'Situação'},
    {field: 'descricao', header: 'Descrição'}
  ];
  constructor(private statusParcelaService: StatusParcelaService,
              private errorHandler: ErrorHandlerService,
              private toasty: ToastyService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.statusParcelaService.listar().subscribe(dados => this.dados = dados,
      err => this.errorHandler.handle(err));
  }

  excluir(codigo: number) {
    this.statusParcelaService.excluir(codigo).subscribe(res => {
      this.toasty.success('Registro excluído com sucesso!');
      this.consultar();
    }, err => this.errorHandler.handle(err));
  }

}
