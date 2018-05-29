import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoRoutingModule } from './grupo-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { GrupoComponent } from './grupo.component';
import { GrupoDataComponent } from './grupo-data/grupo-data.component';
import { GrupoService } from './grupo.service';
import {HttpService} from '../../../../shared/http/http.service';

@NgModule({
  imports: [
    CommonModule,
    GrupoRoutingModule,
    SharedModule
  ],
  declarations: [GrupoComponent, GrupoDataComponent],
  providers: [GrupoService, HttpService]
})
export class GrupoModule { }
