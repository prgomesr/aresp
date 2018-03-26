import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ToastyService } from 'ng2-toasty';

import { Banco } from '../../../../../core/model';
import { BancoService } from '../banco.service';
import { ErrorHandlerService } from '../../../../../core/error-handler.service';

@Component({
  selector: 'app-banco-data',
  templateUrl: './banco-data.component.html',
  styleUrls: ['./banco-data.component.css']
})
export class BancoDataComponent implements OnInit {

  banco = new Banco();

  constructor(private bancoService: BancoService,
              private errorHandler: ErrorHandlerService,
              private toasty: ToastyService) { }

  ngOnInit() {
  }

  salvar(form: FormControl) {
    this.bancoService.salvar(this.banco).subscribe(() => {
      this.toasty.success('Registro salvo com sucesso!');
      form.reset();
      this.banco = new Banco();
    }, err => this.errorHandler.handle(err));
  }

}
