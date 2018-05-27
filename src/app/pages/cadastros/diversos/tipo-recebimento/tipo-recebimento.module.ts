import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../../shared/shared.module';
import { TipoRecebimentoRoutingModule } from './tipo-recebimento-routing.module';
import { TipoRecebimentoComponent } from './tipo-recebimento.component';
import { TipoRecebimentoDataComponent } from './tipo-recebimento-data/tipo-recebimento-data.component';
import { TipoRecebimentoService } from './tipo-recebimento.service';
import {HttpService} from '../../../../shared/http/http.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TipoRecebimentoRoutingModule
  ],
  declarations: [TipoRecebimentoComponent, TipoRecebimentoDataComponent],
  providers: [TipoRecebimentoService, HttpService]
})
export class TipoRecebimentoModule { }
