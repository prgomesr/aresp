import { Component, OnInit } from '@angular/core';
import { OperadoraService } from './operadora.service';

@Component({
  selector: 'app-operadora',
  templateUrl: './operadora.component.html',
  styleUrls: ['./operadora.component.css']
})
export class OperadoraComponent implements OnInit {

  operadoras = [];
  cols = [
    {field: 'nome', header: 'Nome'},
    {field: 'imagem', header: 'Imagem'}
  ];
  constructor(private operadoraService: OperadoraService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.operadoraService.listar().subscribe(dados => this.operadoras = dados);
  }
}
