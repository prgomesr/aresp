import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../../shared/shared.module';
import { AgenciaRoutingModule } from './agencia-routing.module';
import { AgenciaComponent } from './agencia.component';
import { AgenciaDataComponent } from './agencia-data/agencia-data.component';
import { AgenciaService } from './agencia.service';
import {BancoService} from '../banco/banco.service';
import {HttpService} from '../../../../shared/http/http.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AgenciaRoutingModule
  ],
  declarations: [AgenciaComponent, AgenciaDataComponent],
  providers: [AgenciaService, BancoService, HttpService]
})
export class AgenciaModule { }
