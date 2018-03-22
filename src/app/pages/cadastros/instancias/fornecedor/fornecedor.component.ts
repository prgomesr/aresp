import { Component, OnInit } from '@angular/core';

import { FornecedorService } from './fornecedor.service';
import { ErrorHandlerService } from '../../../../core/error-handler.service';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {

  fornecedores = [];

  constructor(private fornecedorService: FornecedorService,
              private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.fornecedorService.listar().subscribe(fornecedores => this.fornecedores = fornecedores,
        err => this.errorHandler.handle(err));
  }
}
