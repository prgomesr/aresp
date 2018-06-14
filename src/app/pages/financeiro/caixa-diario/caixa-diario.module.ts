import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaixaDiarioRoutingModule } from './caixa-diario-routing.module';
import { CaixaDiarioComponent } from './caixa-diario.component';
import {SharedModule} from '../../../shared/shared.module';
import {HttpService} from '../../../shared/http/http.service';
import {ContasReceberService} from '../contas-receber/contas-receber.service';
import {GrupoService} from '../../cadastros/diversos/grupo/grupo.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CaixaDiarioRoutingModule
  ],
  declarations: [CaixaDiarioComponent],
  providers: [HttpService],
})
export class CaixaDiarioModule { }
