import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContaCaixaService } from './conta-caixa.service';
import { SharedModule } from '../../../../shared/shared.module';
import { ContaCaixaDataComponent } from './conta-caixa-data/conta-caixa-data.component';
import { ContaCaixaComponent } from './conta-caixa.component';
import { ContaCaixaRoutingModule } from './conta-caixa-routing.module';
import { EmpresaService } from '../../instancias/empresa/empresa.service';
import { AgenciaService } from '../agencia/agencia.service';
import {HttpService} from '../../../../shared/http/http.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ContaCaixaRoutingModule
  ],
  declarations: [ContaCaixaComponent, ContaCaixaDataComponent],
  providers: [ContaCaixaService, EmpresaService, AgenciaService, HttpService]
})
export class ContaCaixaModule { }
