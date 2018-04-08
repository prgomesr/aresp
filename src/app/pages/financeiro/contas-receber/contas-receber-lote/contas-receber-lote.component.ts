import { Component, OnInit } from '@angular/core';
import {Recebimento} from '../../../../core/model';

@Component({
  selector: 'app-contas-receber-lote',
  templateUrl: './contas-receber-lote.component.html',
  styleUrls: ['./contas-receber-lote.component.css']
})
export class ContasReceberLoteComponent implements OnInit {

  recebimento = new Recebimento();
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
  constructor() { }

  ngOnInit() {
  }

}
