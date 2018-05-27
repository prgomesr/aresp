import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../../shared/shared.module';
import { StatusParcelaRoutingModule } from './status-parcela-routing.module';
import { StatusParcelaComponent } from './status-parcela.component';
import { StatusParcelaDataComponent } from './status-parcela-data/status-parcela-data.component';
import { StatusParcelaService } from './status-parcela.service';
import {HttpService} from '../../../../shared/http/http.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StatusParcelaRoutingModule
  ],
  declarations: [StatusParcelaComponent, StatusParcelaDataComponent],
  providers: [StatusParcelaService, HttpService]
})
export class StatusParcelaModule { }
