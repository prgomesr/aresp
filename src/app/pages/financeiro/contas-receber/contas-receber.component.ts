import {Component, OnInit, TemplateRef} from '@angular/core';

import { ToastyService } from 'ng2-toasty';

import { ContasReceberService } from './contas-receber.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ErrorHandlerService } from '../../../core/error-handler.service';

@Component({
  selector: 'app-contas-receber',
  templateUrl: './contas-receber.component.html',
  styleUrls: ['./contas-receber.component.css']
})
export class ContasReceberComponent implements OnInit {

  contas = [];
  periodos = [
    {label: 'Mês atual', value: 1},
    {label: 'Últimos 7 dias', value: 2},
    {label: 'Hoje', value: 3},
    {label: 'Todos', value: 4}
  ];
  filtroStatus = [
    {label: 'Todos', value: 1},
    {label: 'Pago', value: 2},
    {label: 'Em aberto', value: 3},
    {label: 'A vencer', value: 4}
  ];
  constructor(private recebimentoService: ContasReceberService,
              private  toasty: ToastyService,
              private modalService: BsModalService,
              private errorHandler: ErrorHandlerService) { }

  modalRef: BsModalRef;
  message: string;

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.recebimentoService.listar().subscribe(recebimentos => this.contas = recebimentos,
      erro => this.errorHandler.handle(erro));
  }

  excluir(codigo: any) {
    this.recebimentoService.excluir(codigo.id).subscribe(res => {
      this.consultar();
      this.toasty.success('Registro excluído com sucesso.');
    },
      erro => this.errorHandler.handle(erro));
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(codigo: any) {
    this.modalRef.hide();
    this.excluir(codigo);
  }

  decline(): void {
    this.modalRef.hide();
  }


}
