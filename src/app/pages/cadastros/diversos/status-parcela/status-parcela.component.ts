import { Component, OnInit } from '@angular/core';
import { StatusParcelaService } from './status-parcela.service';

@Component({
  selector: 'app-status-parcela',
  templateUrl: './status-parcela.component.html',
  styleUrls: ['./status-parcela.component.css']
})
export class StatusParcelaComponent implements OnInit {

  dados = [];
  cols = [
    {field: 'situacao', header: 'Situaçao'},
    {field: 'descricao', header: 'Descrição'}
  ];
  constructor(private statusParcelaService: StatusParcelaService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.statusParcelaService.listar().subscribe(dados => this.dados = dados);
  }

}
