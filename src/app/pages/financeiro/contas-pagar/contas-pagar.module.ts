import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';
import {ContasPagarRoutingModule} from './contas-pagar.routing.module';
import {ContasPagarComponent} from './contas-pagar.component';
import {ContasPagarDataComponent} from './contas-pagar-data/contas-pagar-data.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ContasPagarRoutingModule
  ],
  declarations: [ContasPagarComponent, ContasPagarDataComponent]
})
export class ContasPagarModule { }
