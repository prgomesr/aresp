import { Component, OnInit } from '@angular/core';

import { OperadoraService } from './operadora.service';
import { ErrorHandlerService } from '../../../../core/error-handler.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-operadora',
  templateUrl: './operadora.component.html',
  styleUrls: ['./operadora.component.css']
})
export class OperadoraComponent implements OnInit {

  operadoras = [];
  cols = [
    {field: 'nome', header: 'Nome'}
  ];
  constructor(private operadoraService: OperadoraService,
              private errorHandler: ErrorHandlerService,
              private toasty: ToastyService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.operadoraService.listar().subscribe((dados:any) => this.operadoras = dados.result,
      err => this.errorHandler.handle(err));
  }

  excluir(codigo: number) {
    this.operadoraService.excluir(codigo).subscribe(res => {
      this.toasty.success('Registro excluído com sucesso!');
      this.consultar();
    }, err => this.errorHandler.handle(err));
  }
}
