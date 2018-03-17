import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contas-pagar',
  templateUrl: './contas-pagar.component.html',
  styleUrls: ['./contas-pagar.component.css']
})
export class ContasPagarComponent implements OnInit {

  contas = [];
  periodos = [
    {label: 'Mês atual', value: 1},
    {label: 'Últimos 7 dias', value: 2},
    {label: 'Todos', value: 3},
  ];
  cols = [{}];

  constructor() { }

  ngOnInit() {
  }

}
