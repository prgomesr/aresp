import { Component, OnInit } from '@angular/core';

import { TipoRecebimentoService } from './tipo-recebimento.service';
import { ErrorHandlerService } from '../../../../core/error-handler.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-tipo-recebimento',
  templateUrl: './tipo-recebimento.component.html',
  styleUrls: ['./tipo-recebimento.component.css']
})
export class TipoRecebimentoComponent implements OnInit {

  dados = [];
  cols = [
    {field: 'nome', header: 'Nome'}
  ];
  constructor(private tipoRecebimentoService: TipoRecebimentoService,
              private errorHandler: ErrorHandlerService,
              private toasty: ToastyService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.tipoRecebimentoService.listar().subscribe((dados:any) => this.dados = dados.result,
      err => this.errorHandler.handle(err));
  }

  excluir(codigo: number) {
    this.tipoRecebimentoService.excluir(codigo).subscribe(res => {
      this.toasty.success('Registro excluído com sucesso!');
      this.consultar();
    }, err => this.errorHandler.handle(err));
  }

}
