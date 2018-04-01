import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-conta-caixa-data',
  templateUrl: './conta-caixa-data.component.html',
  styleUrls: ['./conta-caixa-data.component.css']
})
export class ContaCaixaDataComponent implements OnInit {

  formulario: FormGroup;
  tipos = [
    {nome: 'C'}
  ];
  default =  'Selecione: ';
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [],
      numero: [],
      digito: [],
      nome: [null, Validators.required],
      tipo: [],
      tx_multa: [],
      tx_juros: [],
      empresa: this.formBuilder.group({
        id: [],
        nome: [null, Validators.required],
      }),
      agencia: this.formBuilder.group({
        id: [],
        nome: [null, Validators.required],
      })
    });
  }

}
