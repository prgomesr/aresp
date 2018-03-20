import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contas-pagar-data',
  templateUrl: './contas-pagar-data.component.html',
  styleUrls: ['./contas-pagar-data.component.css']
})
export class ContasPagarDataComponent implements OnInit {

  categorias = [
    {label: 'Fornecedor', value: 1},
    {label: 'Energia elétrica', value: 2},
    {label: 'Água', value: 3},
    {label: 'Serviços', value: 4},
    {label: 'Obras', value: 5},
    {label: 'Combustível', value: 6},
    {label: 'Árbitro', value: 7},
    {label: 'Outras', value: 8}
    ];
  fornecedores = [
    {label: 'CPFL', value: 1},
    {label: 'Rio Jardim', value: 2},
    {label: 'Romep', value: 3},
    {label: 'Banco do Brasil S/A', value: 4}
    ];
  contas = [
    {label: '54.643-7', value: 1},
    {label: '7009-2', value: 2},
    {label: '8815-3', value: 3},
    {label: '13003891-3', value: 4}
    ];
  periodos = [
    {label: 'Mensalmente', value: 1}
  ];
  constructor() { }

  ngOnInit() {

  }

}
