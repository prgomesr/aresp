import {Component, Input, OnInit} from '@angular/core';
import {Dependente} from '../../../../../../core/model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-cliente-data-dependente',
  templateUrl: './cliente-data-dependente.component.html',
  styleUrls: ['./cliente-data-dependente.component.css']
})
export class ClienteDataDependenteComponent implements OnInit {

  @Input() dependentes: Dependente [];
  dependente: Dependente;
  exibindoFormularioContato = false;
  dependenteIndex: number;
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
  parentesco = [
    {label: 'Cônjuge', value: 'Cônjuge'},
    {label: 'Filho', value: 'Filho'}
  ];
  constructor() { }

  ngOnInit() {
  }

  prepararNovoDependente() {
    this.exibindoFormularioContato = true;
    this.dependente = new Dependente();
    this.dependenteIndex = this.dependentes.length;
  }

  pepararEdicaoDependente(d: Dependente, i: number) {
    this.dependente = this.clonarDependente(d);
    this.exibindoFormularioContato = true;
    this.dependenteIndex = i;
  }

  adicionarDependente(f: FormControl) {
    this.dependentes[this.dependenteIndex] = this.clonarDependente(this.dependente);
    this.exibindoFormularioContato = false;
    f.reset();
  }

  clonarDependente(dependente: Dependente): Dependente {
    return new Dependente(dependente.id, dependente.nome, dependente.rg, dependente.parentesco, dependente.nascimento);
  }

  removerDependente(i: number) {
    this.dependentes.splice(i, 1);
  }

  get editando() {
    return this.dependente && this.dependente.id;
  }



}
