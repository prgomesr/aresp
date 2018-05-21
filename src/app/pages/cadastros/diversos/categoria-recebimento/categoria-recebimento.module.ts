import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRecebimentoDataComponent } from './categoria-recebimento-data/categoria-recebimento-data.component';
import { CategoriaRecebimentoComponent } from './categoria-recebimento.component';
import { SharedModule } from '../../../../shared/shared.module';
import { CategoriaRecebimentoRoutingModule } from './categoria-recebimento-routing.module';
import { CategoriaRecebimentoService } from './categoria-recebimento.service';
import {HttpService} from '../../../../shared/http/http.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CategoriaRecebimentoRoutingModule
  ],
  declarations: [CategoriaRecebimentoDataComponent, CategoriaRecebimentoComponent],
  providers: [CategoriaRecebimentoService, HttpService]
})
export class CategoriaRecebimentoModule { }
