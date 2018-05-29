import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../../shared/shared.module';
import { ConvenioComponent } from './convenio.component';
import { ConvenioDataComponent } from './convenio-data/convenio-data.component';
import { ConvenioRoutingModule } from './convenio-routing.module';
import { ConvenioService } from './convenio.service';
import { ContaCaixaService } from '../conta-caixa/conta-caixa.service';
import {HttpService} from '../../../../shared/http/http.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ConvenioRoutingModule
  ],
  declarations: [ConvenioComponent, ConvenioDataComponent],
  providers: [ConvenioService, ContaCaixaService, HttpService]
})
export class ConvenioModule { }
