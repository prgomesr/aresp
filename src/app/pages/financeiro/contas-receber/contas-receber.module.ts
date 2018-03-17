import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { SharedModule } from '../../../shared/shared.module';
import { ContasReceberRoutingModule } from './contas-receber.routing.module';
import { ContasReceberComponent } from './contas-receber.component';
import { ContasReceberDataComponent } from './contas-receber-data/contas-receber-data.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BsDropdownModule.forRoot(),
    ContasReceberRoutingModule
  ],
  declarations: [ContasReceberComponent, ContasReceberDataComponent]
})
export class ContasReceberModule { }
