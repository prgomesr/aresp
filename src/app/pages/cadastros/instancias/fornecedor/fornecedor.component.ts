import {Component, OnInit, TemplateRef} from '@angular/core';

import { FornecedorService } from './fornecedor.service';
import { ErrorHandlerService } from '../../../../core/error-handler.service';
import {ToastyService} from 'ng2-toasty';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Fornecedor} from '../../../../core/model';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {

  fornecedores = [];
  fornecedor = new Fornecedor();
  id: number;
  modalRef: BsModalRef;

  constructor(private fornecedorService: FornecedorService,
              private errorHandler: ErrorHandlerService,
              private toasty: ToastyService,
              private modalService: BsModalService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.fornecedorService.listar().subscribe(fornecedores => this.fornecedores = fornecedores,
        err => this.errorHandler.handle(err));
  }

  excluir(codigo: number) {
    this.fornecedorService.excluir(codigo).subscribe(res => {
      this.toasty.success('Registro excluído com sucesso!');
      this.listar();
    }, err => this.errorHandler.handle(err));
  }

  openModal(template: TemplateRef<any>, codigo: number) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    this.id = codigo;
  }

  confirm(codigo: number) {
    codigo = this.id;
    this.modalRef.hide();
    this.excluir(codigo);
  }

  decline(): void {
    this.modalRef.hide();
  }

  mostrarDetalhe(codigo: number) {
    this.fornecedorService.listarPorCodigo(codigo).subscribe(dado => this.fornecedor = dado,
    err => this.errorHandler.handle(err));
  }

}
