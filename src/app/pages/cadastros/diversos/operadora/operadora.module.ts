import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../../shared/shared.module';
import { OperadoraRoutingModule } from './operadora-routing.module';
import { OperadoraComponent } from './operadora.component';
import { OperadoraDataComponent } from './operadora-data/operadora-data.component';
import { OperadoraService } from './operadora.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OperadoraRoutingModule
  ],
  declarations: [OperadoraComponent, OperadoraDataComponent],
  providers: [OperadoraService]
})
export class OperadoraModule { }
