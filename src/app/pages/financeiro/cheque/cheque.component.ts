import { Component, OnInit } from '@angular/core';
import {ContasPagarService} from '../contas-pagar/contas-pagar.service';
import {ErrorHandlerService} from '../../../core/error-handler.service';
import {Pagamento} from '../../../core/model';

@Component({
  selector: 'app-cheque',
  templateUrl: './cheque.component.html',
  styleUrls: ['./cheque.component.css']
})
export class ChequeComponent implements OnInit {

  pagamentos = [];
  pagamentosSelecionados: Pagamento [];
  constructor(private pagamentoService: ContasPagarService,
              private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.listarPagamentos();
  }

  listarPagamentos() {
    this.pagamentoService.listar().subscribe(dados => this.pagamentos = dados,
      err => this.errorHandler.handle(err));
  }


}
