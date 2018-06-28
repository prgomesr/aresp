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
  exibindoFormularioCheque = false;
  pagamento: Pagamento;
  pt = {
    firstDayOfWeek: 0,
    dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    dayNamesShort: ["D", "S", "T", "Q", "Q", "S", "S"],
    dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
    monthNames: [ "Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro" ],
    monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
    today: 'Hoje',
    clear: 'Limpar'
  };
  constructor(private pagamentoService: ContasPagarService,
              private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.listarPagamentos();
  }

  listarPagamentos() {
    this.pagamentoService.listar().subscribe((dados:any) => this.pagamentos = dados.result,
      err => this.errorHandler.handle(err));
  }

  emitirCheque() {
    // TODO MÉTODO PARA EMISSAO DE CHEQUE DAS CONTAS A PAGAR
  }

  prepararEmissao() {
    this.exibindoFormularioCheque = true;
    this.pagamento = new Pagamento();
  }


}
