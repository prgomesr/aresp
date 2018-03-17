import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contas-receber',
  templateUrl: './contas-receber.component.html',
  styleUrls: ['./contas-receber.component.css']
})
export class ContasReceberComponent implements OnInit {

  contas = [
      {emissao: '15/02/2018', vencimento: '10/03/2018', referencia: 'MAR', recebimento: '', cliente: 'PEDRO ALVES',
          descricao: 'ALUGUEL DE QUADRA', valor: '2.570,00', recebido: '', status: 'EM ABERTO'},
      {emissao: '15/03/2018', vencimento: '10/04/2018', referencia: 'ABR', recebimento: '15/03/2018', cliente: 'MARIA APARECIDA ' +
        'DA SILVA PEREIRA', descricao: 'MENSALIDADE', valor: '70,00', recebido: '70,00', status: 'PAGO'},
      {emissao: '15/03/2018', vencimento: '10/04/2018', referencia: 'ABR', recebimento: '', cliente: 'CARLOS AUGUSTO ALVES CARDOSO',
          descricao: 'CONVENIO MEDICO', valor: '631,00', recebido: '', status: 'A VENCER'}
  ];
  periodos = [
    {label: 'Mês atual', value: 1},
    {label: 'Últimos 7 dias', value: 2},
    {label: 'Hoje', value: 3},
    {label: 'Todos', value: 4}
  ];
  constructor() { }

  ngOnInit() {
  }

}