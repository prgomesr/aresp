import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { BancoService } from './banco.service';
import { Banco } from '../../../../core/model';
import {ErrorHandlerService} from '../../../../core/error-handler.service';
import {ToastyService} from 'ng2-toasty';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css']
})
export class BancoComponent implements OnInit {

  bancos = [];
  banco = new Banco();
  cols = [
    {field: 'nome', header: 'Nome'},
    {field: 'numero', header: 'Número'},
    {field: 'telefone', header: 'Telefone'}
  ];

  constructor(private bancoService: BancoService,
              private errorHandler: ErrorHandlerService,
              private toasty: ToastyService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.bancoService.listar().subscribe((bancos:any) => {
      this.bancos = bancos.result;
      console.log(bancos);
      },
      err => this.errorHandler.handle(err));
  }

  excluir(codigo: number) {
    this.bancoService.excluir(codigo, codigo).subscribe(res => {
      this.toasty.success('Registro excluído com sucesso!');
      this.consultar();
    }, err => this.errorHandler.handle(err));
  }

}
