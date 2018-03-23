import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../../shared/shared.module';
import { CategoriaPagamentoRoutingModule } from './categoria-pagamento-routing.module';
import { CategoriaPagamentoComponent } from './categoria-pagamento.component';
import { CategoriaPagamentoDataComponent } from './categoria-pagamento-data/categoria-pagamento-data.component';
import { CategoriaPagamentoService } from './categoria-pagamento.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CategoriaPagamentoRoutingModule
  ],
  declarations: [CategoriaPagamentoComponent, CategoriaPagamentoDataComponent],
  providers: [CategoriaPagamentoService]
})
export class CategoriaPagamentoModule { }
