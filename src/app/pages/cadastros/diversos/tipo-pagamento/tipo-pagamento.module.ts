import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../../shared/shared.module';
import { TipoPagamentoRoutingModule } from './tipo-pagamento-routing.module';
import { TipoPagamentoComponent } from './tipo-pagamento.component';
import { TipoPagamentoDataComponent } from './tipo-pagamento-data/tipo-pagamento-data.component';
import { TipoPagamentoService } from './tipo-pagamento.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TipoPagamentoRoutingModule
  ],
  declarations: [TipoPagamentoComponent, TipoPagamentoDataComponent],
  providers: [TipoPagamentoService]
})
export class TipoPagamentoModule { }
