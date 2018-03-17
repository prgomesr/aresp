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
  constructor() { }

  ngOnInit() {
  }

}
