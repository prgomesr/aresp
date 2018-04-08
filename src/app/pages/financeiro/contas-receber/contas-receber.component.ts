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

  recebimentos = [];
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
  modalRef: BsModalRef;
  id: number;
  constructor(private recebimentoService: ContasReceberService,
              private toasty: ToastyService,
              private modalService: BsModalService,
              private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.recebimentoService.listar().subscribe(recebimentos => this.recebimentos = recebimentos,
      erro => this.errorHandler.handle(erro));
  }

  excluir(codigo: number) {
    this.recebimentoService.excluir(codigo).subscribe(res => {
      this.consultar();
      this.toasty.success('Registro excluído com sucesso.');
    },
      erro => this.errorHandler.handle(erro));
  }

  openModal(template: TemplateRef<any>, codigo: number) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    this.id = codigo;
  }

  confirm(codigo: number) {
    codigo = this.id;
    this.excluir(codigo);
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }

  carregarContasPagas(valor: number) {
    // TODO API BACK-END DEVERA RETORNAR ESTE VALOR
  }
  carregarContasAPagar(valor: number) {
    // TODO API BACK-END DEVERA RETORNAR ESTE VALOR
  }
  carregarContasVencidas(valor: number) {
    // TODO API BACK-END DEVERA RETORNAR ESTE VALOR
  }


}
