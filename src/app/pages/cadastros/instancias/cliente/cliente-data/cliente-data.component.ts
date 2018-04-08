import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormBuilder, FormControl } from '@angular/forms';

import { BsModalRef, BsModalService } from 'ngx-bootstrap';

import { ErrorHandlerService } from '../../../../../core/error-handler.service';
import { BancoService } from '../../../diversos/banco/banco.service';
import { OperadoraService } from '../../../diversos/operadora/operadora.service';
import { SecretariaService } from '../../../diversos/secretaria/secretaria.service';
import { TipoSocioService } from '../../../diversos/tipo-socio/tipo-socio.service';
import { Cliente } from '../../../../../core/model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-data',
  templateUrl: './cliente-data.component.html',
  styleUrls: ['./cliente-data.component.css']
})
export class ClienteDataComponent implements OnInit {

  tiposSocios = [];
  secretarias = [];
  bancos = [];
  operadoras = [];
  cliente = new Cliente();

  estCivil = [
    { label: 'Solteiro (a)', value: 'S' },
    { label: 'Casado (a)', value: 'C' },
    { label: 'União Estável', value: 'U' },
    { label: 'Divorcidado (a)', value: 'D' },
    { label: 'Viúvo (a)', value: 'V' }
  ];
  sexos = [
    {label: 'Masculino', value: 'M'},
    {label: 'Feminino', value: 'F'}
    ];
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

  constructor(private errorHandler: ErrorHandlerService,
              private clienteService: ClienteService,
              private bancoService: BancoService,
              private operadoraService: OperadoraService,
              private secretariaService: SecretariaService,
              private tipoSocioService: TipoSocioService) {
  }

  ngOnInit() {
    this.listarBancos();
    this.listarOperadoras();
    this.listarSecretarias();
    this.listarTiposSocios();
  }

  listarTiposSocios() {
    this.tipoSocioService.listar().subscribe(dados => this.tiposSocios = dados
        .map(d => ({label: d.nome, value: d.id})),
      err => this.errorHandler.handle(err));
  }

  listarSecretarias() {
    this.secretariaService.listar().subscribe(dados => this.secretarias = dados
        .map(d => ({label: d.nome, value: d.id})),
      err => this.errorHandler.handle(err));
  }

  listarBancos() {
    this.bancoService.listar().subscribe(dados => this.bancos = dados,
      err => this.errorHandler.handle(err));
  }

  listarOperadoras() {
    this.operadoraService.listar().subscribe(dados => this.operadoras = dados,
      err => this.errorHandler.handle(err));
  }

  consultaCep(cep, form) {
    cep = cep.replace(/\D/g, '');
    // Verifica se campo cep possui valor informado.
    if (cep !== '') {
      // Expressão regular para validar o CEP.
      const validacep = /^[0-9]{8}$/;
      // Valida o formato do CEP.
      if (validacep.test(cep)) {
        this.clienteService.getCep(cep).subscribe(dados => this.popularEndereco(dados, form),
          err => this.errorHandler.handle(err));
      }
    }
  }

  popularEndereco(dados, formulario) {
    formulario.form.patchValue({
      endereco: {
          logradouro: dados.logradouro,
          numero: '',
          complemento: dados.complemento,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf
        }
    });
  }

}
