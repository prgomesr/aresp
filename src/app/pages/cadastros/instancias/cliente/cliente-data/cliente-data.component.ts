import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {ToastyService} from 'ng2-toasty';

import { ErrorHandlerService } from '../../../../../core/error-handler.service';
import { BancoService } from '../../../diversos/banco/banco.service';
import { OperadoraService } from '../../../diversos/operadora/operadora.service';
import { SecretariaService } from '../../../diversos/secretaria/secretaria.service';
import { TipoSocioService } from '../../../diversos/tipo-socio/tipo-socio.service';
import { Cliente } from '../../../../../core/model';
import { ClienteService } from '../cliente.service';
import {GrupoService} from '../../../diversos/grupo/grupo.service';
import {NgxSpinnerService} from 'ngx-spinner';

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
  grupos = [];
  cliente = new Cliente();
  estCivil = [
    { label: 'Solteiro (a)', value: 'S' },
    { label: 'Casado (a)', value: 'C' },
    { label: 'União Estável', value: 'U' },
    { label: 'Divorcidado (a)', value: 'D' },
    { label: 'Viúvo (a)', value: 'V' }
  ];
  tiposDadosBancarios = [
    {label: 'Boleto', value: 'BOLETO'},
    {label: 'Débito', value: 'DEBITO'},
    {label: 'Fatura', value: 'FATURA'}
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
    {label: '09', value: '09'},
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
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    monthNames: [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
      'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
    monthNamesShort: [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ],
    today: 'Hoje',
    clear: 'Limpar'
  };

  constructor(private errorHandler: ErrorHandlerService,
              private clienteService: ClienteService,
              private bancoService: BancoService,
              private operadoraService: OperadoraService,
              private secretariaService: SecretariaService,
              private tipoSocioService: TipoSocioService,
              private grupoService: GrupoService,
              private toasty: ToastyService,
              private route: ActivatedRoute,
              private router: Router,
              private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.listarBancos();
    this.listarOperadoras();
    this.listarSecretarias();
    this.listarTiposSocios();
    this.listarGrupos();
    if (id) {
      this.carregarCliente(id);
    }
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarCliente(form);
    } else {
      this.adicionarCliente(form);
    }
  }

  adicionarCliente(form: FormControl) {
    this.clienteService.salvar(this.cliente).subscribe(() => {
      this.toasty.success('Registro salvo com sucesso!');
      form.reset();
      this.cliente = new Cliente();
    }, err => this.errorHandler.handle(err));
  }

  atualizarCliente(form: FormControl) {
    this.clienteService.editar(this.cliente).subscribe((dado: any) => {
        this.cliente = dado;
        this.router.navigate(['/instancias/cliente']);
        this.toasty.success('Registro atualizado com sucesso!');
      },
      err => this.errorHandler.handle(err));
  }

  listarTiposSocios() {
    this.tipoSocioService.listar().subscribe((dados: any) => this.tiposSocios = dados.result
        .map(d => ({label: d.nome, value: d.id})),
      err => this.errorHandler.handle(err));
  }

  listarSecretarias() {
    this.secretariaService.listar().subscribe((dados: any) => this.secretarias = dados.result
        .map(d => ({label: d.nome, value: d.id})),
      err => this.errorHandler.handle(err));
  }

  listarBancos() {
    this.bancoService.listar().subscribe((dados: any) => this.bancos = dados.result
        .map(d => ({label: d.nome, value: d.id})),
      err => this.errorHandler.handle(err));
  }

  listarGrupos() {
    this.grupoService.listar().subscribe((dados: any) => this.grupos = dados.result
      .map(d => ({label: d.nome, value: d.id})),
      error1 => this.errorHandler.handle(error1));
  }

  listarOperadoras() {
    this.operadoraService.listar().subscribe((dados: any) => this.operadoras = dados.result
        .map(d => ({label: d.nome, value: d.id})),
      err => this.errorHandler.handle(err));
  }

  carregarCliente(codigo: number) {
    this.clienteService.listarPorCodigo(codigo).subscribe((dado: any) => {
      this.cliente = dado;
      },
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
        this.spinner.show();
        this.clienteService.getCep(cep).subscribe(dados => {
            this.spinner.hide();
            this.popularEndereco(dados, form);
          },
          err => {
            this.spinner.hide();
            this.errorHandler.handle(err);
          });
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

  get editando(): any {
    return Boolean (this.cliente.id);
  }

}
