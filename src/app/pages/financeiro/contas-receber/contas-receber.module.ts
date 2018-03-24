import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { SharedModule } from '../../../shared/shared.module';
import { ContasReceberRoutingModule } from './contas-receber.routing.module';
import { ContasReceberComponent } from './contas-receber.component';
import { ContasReceberDataComponent } from './contas-receber-data/contas-receber-data.component';
import { ContasReceberLoteComponent } from './contas-receber-lote/contas-receber-lote.component';
import { ContasReceberBaseAnteriorComponent } from './contas-receber-base-anterior/contas-receber-base-anterior.component';
import { ContasReceberService } from './contas-receber.service';
import { GrupoService } from '../../cadastros/diversos/grupo/grupo.service';
import { ClienteService } from '../../cadastros/instancias/cliente/cliente.service';
import { CategoriaRecebimentoService } from '../../cadastros/diversos/categoria-recebimento/categoria-recebimento.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BsDropdownModule.forRoot(),
    ContasReceberRoutingModule
  ],
  declarations: [ContasReceberComponent, ContasReceberDataComponent, ContasReceberLoteComponent, ContasReceberBaseAnteriorComponent],
  providers: [ContasReceberService, CategoriaRecebimentoService, GrupoService, ClienteService]
})
export class ContasReceberModule { }
