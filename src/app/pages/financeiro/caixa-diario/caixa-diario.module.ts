import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaixaDiarioRoutingModule } from './caixa-diario-routing.module';
import { CaixaDiarioComponent } from './caixa-diario.component';

@NgModule({
  imports: [
    CommonModule,
    CaixaDiarioRoutingModule
  ],
  declarations: [CaixaDiarioComponent]
})
export class CaixaDiarioModule { }
