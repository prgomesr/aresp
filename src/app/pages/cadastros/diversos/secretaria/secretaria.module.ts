import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../../shared/shared.module';
import { SecretariaRoutingModule } from './secretaria-routing.module';
import { SecretariaComponent } from './secretaria.component';
import { SecretariaDataComponent } from './secretaria-data/secretaria-data.component';
import { SecretariaService } from './secretaria.service';
import {HttpService} from '../../../../shared/http/http.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SecretariaRoutingModule
  ],
  declarations: [SecretariaComponent, SecretariaDataComponent],
  providers: [SecretariaService, HttpService]
})
export class SecretariaModule { }
