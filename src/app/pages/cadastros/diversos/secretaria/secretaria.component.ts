import { Component, OnInit } from '@angular/core';

import { SecretariaService } from './secretaria.service';
import { ErrorHandlerService } from '../../../../core/error-handler.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-secretaria',
  templateUrl: './secretaria.component.html',
  styleUrls: ['./secretaria.component.css']
})
export class SecretariaComponent implements OnInit {

  secretarias = [];
  cols = [
    {field: 'nome', header: 'Nome'}
  ];
  constructor(private secretariaService: SecretariaService,
              private errorHandler: ErrorHandlerService,
              private toasty: ToastyService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.secretariaService.listar().subscribe((dados:any) => {
        this.secretarias = dados.result;
      },
      err => this.errorHandler.handle(err));
  }

  excluir(codigo: number) {
    this.secretariaService.excluir(codigo).subscribe(res => {
      this.toasty.success('Registro excluído com sucesso!');
      this.consultar();
    }, err => this.errorHandler.handle(err));
  }

}
