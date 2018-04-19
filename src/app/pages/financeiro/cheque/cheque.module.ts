import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {ChequeComponent} from './cheque.component';
import {ChequeRoutingModule} from './cheque-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {ContasPagarService} from '../contas-pagar/contas-pagar.service';

@NgModule({
  imports: [ChequeRoutingModule, CommonModule, SharedModule],
  exports: [],
  declarations: [ChequeComponent],
  providers: [ContasPagarService],
})
export class ChequeModule {
}
