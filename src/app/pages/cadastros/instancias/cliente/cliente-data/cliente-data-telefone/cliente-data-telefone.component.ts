import {Component, Input, OnInit} from '@angular/core';
import {Telefone} from '../../../../../../core/model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-cliente-data-telefone',
  templateUrl: './cliente-data-telefone.component.html',
  styleUrls: ['./cliente-data-telefone.component.css']
})
export class ClienteDataTelefoneComponent implements OnInit {

  @Input() telefones: Telefone[];
  telefone: Telefone;
  exibindoFormularioContato = false;
  telefoneIndex: number;
  tipos = [
    {label: 'PRINCIPAL', value: 'PRINCIPAL'},
    {label: 'CONTATO', value: 'CONTATO'}
  ]
  constructor() { }

  ngOnInit() {
  }

  prepararNovoTelefone() {
    this.exibindoFormularioContato = true;
    this.telefone = new Telefone();
    this.telefoneIndex = this.telefones.length;
  }

  pepararEdicaoTelefone(t: Telefone, i: number) {
    this.telefone = this.clonarTelefone(t);
    this.exibindoFormularioContato = true;
    this.telefoneIndex = i;
  }

  adicionarTelefone(f: FormControl) {
    this.telefones[this.telefoneIndex] = this.clonarTelefone(this.telefone);
    this.exibindoFormularioContato = false;
    f.reset();
  }

  clonarTelefone(telefone: Telefone): Telefone {
    return new Telefone(telefone.id, telefone.numero, telefone.tipo);
  }

  removerTelefone(i: number) {
    this.telefones.splice(i, 1);
  }

  get editando() {
    return this.telefone && this.telefone.id;
  }

}
