import { Component, OnInit } from '@angular/core';

import { ToastyService } from 'ng2-toasty';

import { ConvenioService } from './convenio.service';
import { ErrorHandlerService } from '../../../../core/error-handler.service';

@Component({
  selector: 'app-convenio',
  templateUrl: './convenio.component.html',
  styleUrls: ['./convenio.component.css']
})
export class ConvenioComponent implements OnInit {
  convenios = [];
  cols = [
    {field: 'nome', header: 'Nome'},
    {field: 'numero', header: 'Número'},
    {field: 'telefone', header: 'Telefone'},
    {field: 'observacao', header: 'Observação'},
    {field: 'conta_numero', header: 'Conta Caixa'}
  ];
  constructor(private convenioService: ConvenioService,
              private errorHandler: ErrorHandlerService,
              private toasty: ToastyService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.convenioService.listar().subscribe((dados:any) => this.convenios = dados.result,
      err => this.errorHandler.handle(err));
  }

  excluir(codigo: number) {
    this.convenioService.excluir(codigo).subscribe(res => {
      this.toasty.success('Registro excluído com sucesso!');
      this.consultar();
    }, err => this.errorHandler.handle(err));
  }

}
