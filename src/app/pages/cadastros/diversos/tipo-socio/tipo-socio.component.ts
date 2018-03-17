import { Component, OnInit } from '@angular/core';
import { TipoSocioService } from './tipo-socio.service';

@Component({
  selector: 'app-tipo-socio',
  templateUrl: './tipo-socio.component.html',
  styleUrls: ['./tipo-socio.component.css']
})
export class TipoSocioComponent implements OnInit {

  dados = [];
  cols = [
    {field: 'nome', header: 'Nome'}
  ];
  constructor(private tipoSocioService: TipoSocioService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar () {
    this.tipoSocioService.listar().subscribe(dados => this.dados = dados);
  }

}
