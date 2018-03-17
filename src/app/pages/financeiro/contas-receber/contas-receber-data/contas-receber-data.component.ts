import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contas-receber-data',
  templateUrl: './contas-receber-data.component.html',
  styleUrls: ['./contas-receber-data.component.css']
})
export class ContasReceberDataComponent implements OnInit {

  clientes = [
    {label: 'MARIA DO CARMO PEREIRA', value: 1},
    {label: 'PEDRO DE ALCANTARA MACHADO', value: 2},
    {label: 'JOSEFINA BORGES', value: 3}
    ];
  categorias = [
    {label: 'Mensalidade', value: 1},
    {label: 'Aluguel de Quadra', value: 2},
    {label: 'Outras', value: 8}
  ];
  gruposRecebimentos = [
    {label: 'Boleto', value: 1},
    {label: 'Cartão', value: 2},
    {label: 'BB1', value: 3},
    {label: 'BB2', value: 4}
  ];
  contas = [
    {label: '54.643-7', value: 1},
    {label: '7009-2', value: 2},
    {label: '8815-3', value: 3},
    {label: '13003891-3', value: 4}
  ];
  pt = {
    firstDayOfWeek: 1,
    dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    dayNamesMin: ["D","S","T","Q","Q","S","S"],
    monthNames: [ "Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro" ],
    monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
    today: 'Hoje',
    clear: 'Limpar'
  };
  constructor() { }

  ngOnInit() {
  }

}
