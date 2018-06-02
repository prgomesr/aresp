import { Component, OnInit } from '@angular/core';
import {ClienteService} from './cliente.service';
import {ErrorHandlerService} from '../../../../core/error-handler.service';
import { Cliente } from '../../../../core/model';
import {FormControl} from '@angular/forms';
import {ToastyService} from 'ng2-toasty';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes = [];
  motivos = [
    {label: 'Infrequencia', value: 'INFREQUENCIA'},
    {label: 'Falecimento', value: 'FALECIMENTO'},
    {label: 'Financeiro', value: 'FINANCEIRO'},
    {label: 'Insatisfação', value: 'INSATISFACAO'},
    {label: 'Mudança', value: 'MUDANCA'},
    {label: 'Outro', value: 'OUTRO'}
  ];
  cliente = new Cliente();
  exibindoFormularioCancelamento = false;
  pt = {
    firstDayOfWeek: 0,
    dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    dayNamesShort: ["D", "S", "T", "Q", "Q", "S", "S"],
    dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
    monthNames: [ "Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro" ],
    monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
    today: 'Hoje',
    clear: 'Limpar'
  };
  constructor(private clienteService: ClienteService,
              private errorHandler: ErrorHandlerService,
              private toasty: ToastyService) {}

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.clienteService.listar().subscribe((clientes:any) => this.clientes = clientes,
      err => this.errorHandler.handle(err));
  }

  prepararCancelamento(id: number) {
    this.exibindoFormularioCancelamento = true;
    this.carregarCliente(id);
  }

  carregarCliente(id: number) {
    this.clienteService.listarPorCodigo(id).subscribe(dado => this.cliente = dado,
      err => this.errorHandler.handle(err));
  }

  cancelarCliente(f: FormControl) {
    this.clienteService.editar(this.cliente).subscribe(dado => {
      this.cliente = dado;
      this.toasty.success('Cliente cancelado com sucesso!');
      this.listar();
      this.exibindoFormularioCancelamento = false;
    },
      err => this.errorHandler.handle(err));
  }

}
