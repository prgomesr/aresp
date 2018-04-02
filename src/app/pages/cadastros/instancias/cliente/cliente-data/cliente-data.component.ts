import {Component, OnInit, TemplateRef} from '@angular/core';
import { FormControl } from '@angular/forms';

import { BsModalRef, BsModalService } from 'ngx-bootstrap';

import { ErrorHandlerService } from '../../../../../core/error-handler.service';
import { BancoService } from '../../../diversos/banco/banco.service';
import { OperadoraService } from '../../../diversos/operadora/operadora.service';
import { SecretariaService } from '../../../diversos/secretaria/secretaria.service';
import { TipoSocioService } from '../../../diversos/tipo-socio/tipo-socio.service';
import { Cliente, Telefone } from '../../../../../core/model';

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
              private bancoService: BancoService,
              private operadoraService: OperadoraService,
              private secretariaService: SecretariaService,
              private tipoSocioService: TipoSocioService,
              private modalService: BsModalService) {
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
    console.log('novo telefone' + this.telefone.telefone);
  }

  adicionarTelefone(frm: FormControl) {
    this.cliente.telefones.push(this.telefone);
    console.log(this.telefone.telefone);
    // this.modalRef.hide();
  }

}
