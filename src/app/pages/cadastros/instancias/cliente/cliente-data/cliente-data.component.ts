import {Component, OnInit} from '@angular/core';

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
  meses = [
    {label: '01', value: '01'},
    {label: '02', value: '02'},
    {label: '03', value: '03'},
    {label: '04', value: '04'},
    {label: '05', value: '05'},
    {label: '06', value: '06'},
    {label: '07', value: '07'},
    {label: '08', value: '08'},
    {label: '08', value: '09'},
    {label: '10', value: '10'},
    {label: '11', value: '11'},
    {label: '12', value: '12'}
    ];
  anos = [
    {label: '18', value: '18'},
    {label: '19', value: '19'},
    {label: '20', value: '20'},
    {label: '21', value: '21'},
    {label: '22', value: '22'},
    {label: '23', value: '23'},
    {label: '24', value: '24'},
    {label: '25', value: '25'},
    {label: '26', value: '26'},
    {label: '27', value: '27'},
    {label: '28', value: '28'},
    {label: '29', value: '29'},
    {label: '30', value: '30'}
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
    this.bancoService.listar().subscribe(dados => this.bancos = dados
        .map(d => ({label: d.nome, value: d.id})),
      err => this.errorHandler.handle(err));
  }

  listarOperadoras() {
    this.operadoraService.listar().subscribe(dados => this.operadoras = dados
        .map(d => ({label: d.nome, value: d.id})),
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
