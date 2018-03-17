import { Component, OnInit } from '@angular/core';
import { GrupoService } from './grupo.service';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {

  grupos = [];
  cols = [
    {field: 'nome', header: 'Nome'}
  ];

  constructor(private grupoService: GrupoService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.grupoService.listar().subscribe(dados => this.grupos = dados);
  }
}
