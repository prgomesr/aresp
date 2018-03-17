import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {

  fornecedores = [];
  cols = [
    {header: 'Nome Fantasia', field: 'fantasia'},
    {header: 'Telefone', field: 'telefone'},
    {header: 'Contato', field: 'contato'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
