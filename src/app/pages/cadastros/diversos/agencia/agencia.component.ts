import {Component, OnInit, TemplateRef} from '@angular/core';

import { ToastyService } from 'ng2-toasty';

import { AgenciaService } from './agencia.service';
import { Agencia } from '../../../../core/model';
import { ErrorHandlerService } from '../../../../core/error-handler.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-agencia',
  templateUrl: './agencia.component.html',
  styleUrls: ['./agencia.component.css']
})
export class AgenciaComponent implements OnInit {

  agencias = [];
  id: number;
  modalRef: BsModalRef;
  cols = [
    {field: 'numero', header: 'Número'},
    {field: 'digito', header: 'Dígito'},
    {field: 'telefone', header: 'Telefone'},
    {field: 'gerente', header: 'Gerente'},
    {field: 'banco.nome', header: 'Banco'},
  ]
  constructor(private agenciaService: AgenciaService,
              private toasty: ToastyService,
              private errorHandler: ErrorHandlerService,
              private modalService: BsModalService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.agenciaService.listar().subscribe(dados => this.agencias = dados,
      err => this.errorHandler.handle(err));
  }

  excluir(codigo: number) {
    this.agenciaService.excluir(codigo).subscribe(res => {
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


}
