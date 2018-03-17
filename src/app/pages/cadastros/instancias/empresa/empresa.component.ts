import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  empresas = [];
  cols = [
    {header: 'Razão Social', field: 'razao'},
    {header: 'Fantasia', field: 'fantasia'},
    {header: 'CNPJ', field: 'cnpj'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
