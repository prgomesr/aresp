import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-cliente-data',
  templateUrl: './cliente-data.component.html',
  styleUrls: ['./cliente-data.component.css']
})
export class ClienteDataComponent implements OnInit {

  tiposSocios = [
    {label: 'Sócio Contribuinte', value: 1},
    {label: 'Funcionário Público', value: 2},
    {label: 'Dependente Especial', value: 3}
    ];
  estCivil = [
    { label: 'Solteiro (a)', value: 1 },
    { label: 'Casado (a)', value: 2 },
    { label: 'União Estável', value: 3 },
    { label: 'Divorcidado (a)', value: 4 },
    { label: 'Viúvo (a)', value: 5 }
  ];
  secretarias = [
    {label: 'Segurança Pública', value: 1},
    {label: 'Educação', value: 2},
    {label: 'Tribunal de Justiça', value: 3}
    ];
  bancos = [
    {label: 'Banco do Brasil', value: 1},
    {label: 'Santander', value: 2},
    {label: 'Bradesco', value: 3}
    ];
  operadoras = [
    {label: 'Visa', value: 1},
    {label: 'Master', value: 2},
    {label: 'Dinners', value: 3},
    {label: 'Elo', value: 4}
    ];

  sexo = [
    {label: '', value: 'Masculino', icon: 'fa fa-male'},
    {label: '', value: 'Feminino', icon: 'fa fa-female'}
    ];

  constructor() {
  }
  pt: any;
  uploadedFiles: any[] = [];
  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    /*this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});*/
  }
  ngOnInit() {
    this.pt = {
      firstDayOfWeek: 1,
      dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
      dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
      dayNamesMin: ["D","S","T","Q","Q","S","S"],
      monthNames: [ "Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro" ],
      monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
      today: 'Hoje',
      clear: 'Limpar'
    };
  }

  salvar (form: NgForm) {
    console.log(form);
  }

}
