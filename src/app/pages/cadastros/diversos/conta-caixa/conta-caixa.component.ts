import {Component, OnInit, TemplateRef} from '@angular/core';
import {ContaCaixaService} from './conta-caixa.service';
import {ToastyService} from 'ng2-toasty';
import {ErrorHandlerService} from '../../../../core/error-handler.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ContaCaixa} from '../../../../core/model';

@Component({
  selector: 'app-conta-caixa',
  templateUrl: './conta-caixa.component.html',
  styleUrls: ['./conta-caixa.component.css']
})
export class ContaCaixaComponent implements OnInit {
  contas = [];
  conta = new ContaCaixa();
  id: number;
  modalRef: BsModalRef;
  constructor(private contaService: ContaCaixaService,
              private toasty: ToastyService,
              private errorHandler: ErrorHandlerService,
              private modalService: BsModalService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.contaService.listar().subscribe(dados => this.contas = dados,
      err => this.errorHandler.handle(err));
  }

  excluir(codigo: number) {
    this.contaService.excluir(codigo).subscribe(res => {
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
