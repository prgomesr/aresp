import { Component, OnInit } from '@angular/core';

import { EmpresaService } from './empresa.service';
import { ErrorHandlerService } from '../../../../core/error-handler.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  empresas = [];

  constructor(private empresaService: EmpresaService,
              private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.empresaService.listar().subscribe(empresas => this.empresas = empresas,
      err => this.errorHandler.handle(err));
  }

}
