import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormBuilder, FormControl } from '@angular/forms';

import { BsModalRef, BsModalService } from 'ngx-bootstrap';

import { ErrorHandlerService } from '../../../../../core/error-handler.service';
import { BancoService } from '../../../diversos/banco/banco.service';
import { OperadoraService } from '../../../diversos/operadora/operadora.service';
import { SecretariaService } from '../../../diversos/secretaria/secretaria.service';
import { TipoSocioService } from '../../../diversos/tipo-socio/tipo-socio.service';
import { Cliente, Telefone } from '../../../../../core/model';
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
  telefone: Telefone;
  modalRef: BsModalRef;
  telefoneIndex: number;
  estCivil = [
    { label: 'Solteiro (a)', value: 1 },
    { label: 'Casado (a)', value: 2 },
    { label: 'União Estável', value: 3 },
    { label: 'Divorcidado (a)', value: 4 },
    { label: 'Viúvo (a)', value: 5 }
  ];
  sexos = [
    {label: 'Masculino', value: '1'},
    {label: 'Feminino', value: '2'}
    ];

  constructor(private errorHandler: ErrorHandlerService,
              private clienteService: ClienteService,
              private bancoService: BancoService,
              private operadoraService: OperadoraService,
              private secretariaService: SecretariaService,
              private tipoSocioService: TipoSocioService,
              private modalService: BsModalService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.listarBancos();
    this.listarOperadoras();
    this.listarSecretarias();
    this.listarTiposSocios();
  }

  listarTiposSocios() {
    this.tipoSocioService.listar().subscribe(dados => this.tiposSocios = dados,
      err => this.errorHandler.handle(err));
  }

  listarSecretarias() {
    this.secretariaService.listar().subscribe(dados => this.secretarias = dados,
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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});

  }

  prepararTelefone() {
    this.telefone = new Telefone();
  }

  adicionarTelefone(f: FormControl) {
    this.telefone = f.value;
    this.cliente.telefones.push(this.clonarTelefone(this.telefone));
    this.modalRef.hide();
  }

  removerTelefone(index: number) {
    this.cliente.telefones.splice(index);
  }

  editarTelefone(telefone: Telefone) {
    this.telefone = telefone;
  }

  clonarTelefone(telefone: Telefone): Telefone {
    return new Telefone(telefone.id, telefone.telefone, telefone.tipo);
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
