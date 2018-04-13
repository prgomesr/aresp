import { Component, OnInit } from '@angular/core';
import {Recebimento} from '../../../core/model';
import {ContasReceberService} from '../contas-receber/contas-receber.service';
import {ErrorHandlerService} from '../../../core/error-handler.service';
import {GrupoService} from '../../cadastros/diversos/grupo/grupo.service';

@Component({
  selector: 'app-gera-remessa',
  templateUrl: './gera-remessa.component.html',
  styleUrls: ['./gera-remessa.component.css']
})
export class GeraRemessaComponent implements OnInit {

  recebimentos = [];
  grupos = [];
  exibindoFiltro = false;
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
  constructor(private recebimentoService: ContasReceberService,
              private grupoService: GrupoService,
              private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.listarRecebimentos();
    this.listarGrupos();
  }

  listarRecebimentos() {
    this.recebimentoService.listar().subscribe(dados => this.recebimentos = dados,
      err => this.errorHandler.handle(err));
  }

  listarGrupos() {
    this.grupoService.listar().subscribe(dados => this.grupos = dados
        .map(d => ({label: d.nome, value: d.id})),
      err => this.errorHandler.handle(err));
  }

  ExibirDialagoFiltro() {
    this.exibindoFiltro = true;
  }

  gerarRemessa() {
    // TODO MÉTODO PARA GERAÇÃO DE REMESSA A PARTIR DOS RECEBIMENTOS COM STATUS geraRemessa=false
  }

}
