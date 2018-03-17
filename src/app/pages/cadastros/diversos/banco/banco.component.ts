import { Component, OnInit } from '@angular/core';
import {BancoService} from './banco.service';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css']
})
export class BancoComponent implements OnInit {

  bancos = [];
  cols = [
    {field: 'nome', header: 'Nome'},
    {field: 'numero', header: 'Número'},
    {field: 'telefone', header: 'Telefone'}
  ];
  constructor(private bancoService: BancoService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.bancoService.listar().subscribe(bancos => this.bancos = bancos);
  }

}
