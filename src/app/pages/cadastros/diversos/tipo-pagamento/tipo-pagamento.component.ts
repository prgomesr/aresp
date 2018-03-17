import { Component, OnInit } from '@angular/core';
import { TipoPagamentoService } from './tipo-pagamento.service';

@Component({
  selector: 'app-tipo-pagamento',
  templateUrl: './tipo-pagamento.component.html',
  styleUrls: ['./tipo-pagamento.component.css']
})
export class TipoPagamentoComponent implements OnInit {

  dados = [];
  cols = [
    {field: 'nome', header: 'Nome'}
  ];
  constructor(private tipoPagamentoService: TipoPagamentoService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.tipoPagamentoService.listar().subscribe(dados => this.dados = dados);
  }

}
