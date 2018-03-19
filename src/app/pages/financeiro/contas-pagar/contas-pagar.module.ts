import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';
import { ContasPagarRoutingModule } from './contas-pagar.routing.module';
import { ContasPagarComponent } from './contas-pagar.component';
import { ContasPagarDataComponent } from './contas-pagar-data/contas-pagar-data.component';
import { ContasPagarService } from './contas-pagar.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ContasPagarRoutingModule
  ],
  declarations: [ContasPagarComponent, ContasPagarDataComponent],
  providers: [ContasPagarService]
})
export class ContasPagarModule { }
