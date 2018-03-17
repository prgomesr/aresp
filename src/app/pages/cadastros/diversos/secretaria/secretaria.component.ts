import { Component, OnInit } from '@angular/core';
import { SecretariaService } from './secretaria.service';

@Component({
  selector: 'app-secretaria',
  templateUrl: './secretaria.component.html',
  styleUrls: ['./secretaria.component.css']
})
export class SecretariaComponent implements OnInit {

  secretarias = [];
  cols = [
    {field: 'nome', header: 'Nome'}
  ];
  constructor(private secretariaService: SecretariaService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.secretariaService.listar().subscribe(dados => this.secretarias = dados);
  }

}
