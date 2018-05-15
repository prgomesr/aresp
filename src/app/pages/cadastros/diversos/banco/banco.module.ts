import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BancoRoutingModule } from './banco-routing.module';
import { BancoComponent } from './banco.component';
import { BancoDataComponent } from './banco-data/banco-data.component';
import { BancoService } from './banco.service';
import { SharedModule } from '../../../../shared/shared.module';
import {HttpService} from '../../../../shared/http/http.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BancoRoutingModule
  ],
  declarations: [BancoComponent, BancoDataComponent],
  providers: [BancoService, HttpService]
})
export class BancoModule { }
