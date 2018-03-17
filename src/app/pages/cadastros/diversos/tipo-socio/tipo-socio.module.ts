import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../../shared/shared.module';
import { TipoSocioRoutingModule } from './tipo-socio-routing.module';
import { TipoSocioComponent } from './tipo-socio.component';
import { TipoSocioDataComponent } from './tipo-socio-data/tipo-socio-data.component';
import { TipoSocioService } from './tipo-socio.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TipoSocioRoutingModule
  ],
  declarations: [TipoSocioComponent, TipoSocioDataComponent],
  providers: [TipoSocioService]
})
export class TipoSocioModule { }
