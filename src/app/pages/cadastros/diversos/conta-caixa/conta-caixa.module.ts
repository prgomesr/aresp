import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContaCaixaService } from './conta-caixa.service';
import { SharedModule } from '../../../../shared/shared.module';
import { ContaCaixaDataComponent } from './conta-caixa-data/conta-caixa-data.component';
import { ContaCaixaComponent } from './conta-caixa.component';
import { ContaCaixaRoutingModule } from './conta-caixa-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ContaCaixaRoutingModule
  ],
  declarations: [ContaCaixaComponent, ContaCaixaDataComponent],
  providers: [ContaCaixaService]
})
export class ContaCaixaModule { }
