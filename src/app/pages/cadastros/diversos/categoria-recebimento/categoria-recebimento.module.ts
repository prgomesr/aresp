import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRecebimentoDataComponent } from './categoria-recebimento-data/categoria-recebimento-data.component';
import { CategoriaRecebimentoComponent } from './categoria-recebimento.component';
import { SharedModule } from '../../../../shared/shared.module';
import { CategoriaRecebimentoRoutingModule } from './categoria-recebimento-routing.module';
import { CategoriaRecebimentoService } from './categoria-recebimento.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CategoriaRecebimentoRoutingModule
  ],
  declarations: [CategoriaRecebimentoDataComponent, CategoriaRecebimentoComponent],
  providers: [CategoriaRecebimentoService]
})
export class CategoriaRecebimentoModule { }
