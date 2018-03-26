import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() dados;
  @Input() cols;
  @Input() linkEdicao: string;
  @Output() dadoExcluido = new EventEmitter<number>();
  modalRef: BsModalRef;
  pegaId: number;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  aoExcluir(codigo: number) {
    this.dadoExcluido.emit(codigo);
  }

  openModal(template: TemplateRef<any>, codigo: number) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    this.pegaId = codigo;
  }

  confirm(codigo: number) {
    this.aoExcluir(codigo = this.pegaId);
    this.modalRef.hide();
  }
  decline(): void {
    this.modalRef.hide();
  }

}
