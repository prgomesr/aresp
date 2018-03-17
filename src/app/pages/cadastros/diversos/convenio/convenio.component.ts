import { Component, OnInit } from '@angular/core';
import { ConvenioService } from './convenio.service';

@Component({
  selector: 'app-convenio',
  templateUrl: './convenio.component.html',
  styleUrls: ['./convenio.component.css']
})
export class ConvenioComponent implements OnInit {
  convenios = [];
  cols = [
    {field: 'nome', header: 'Nome'},
    {field: 'numero', header: 'Número'},
    {field: 'telefone', header: 'Telefone'},
    {field: 'observacao', header: 'Observação'}
  ];
  constructor(private convenioService: ConvenioService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.convenioService.listar().subscribe(dados => this.convenios = dados);
  }

}
