import { Component, OnInit } from '@angular/core';
import { TipoRecebimentoService } from './tipo-recebimento.service';

@Component({
  selector: 'app-tipo-recebimento',
  templateUrl: './tipo-recebimento.component.html',
  styleUrls: ['./tipo-recebimento.component.css']
})
export class TipoRecebimentoComponent implements OnInit {

  dados = [];
  cols = [
    {field: 'nome', header: 'Nome'}
  ];
  constructor(private tipoRecebimentoService: TipoRecebimentoService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.tipoRecebimentoService.listar().subscribe(dados => this.dados = dados);
  }

}
