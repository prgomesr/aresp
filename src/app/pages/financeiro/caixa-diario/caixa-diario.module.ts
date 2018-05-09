import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaixaDiarioRoutingModule } from './caixa-diario-routing.module';
import { CaixaDiarioComponent } from './caixa-diario.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CaixaDiarioRoutingModule
  ],
  declarations: [CaixaDiarioComponent]
})
export class CaixaDiarioModule { }
