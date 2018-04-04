import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { ClienteDataComponent } from './cliente-data/cliente-data.component';
import { SharedModule } from '../../../../shared/shared.module';
import { ClienteService } from './cliente.service';
import { BancoService } from '../../diversos/banco/banco.service';
import { OperadoraService } from '../../diversos/operadora/operadora.service';
import { TipoSocioService } from '../../diversos/tipo-socio/tipo-socio.service';
import { SecretariaService } from '../../diversos/secretaria/secretaria.service';
import { ClienteDataTelefoneComponent } from './cliente-data/cliente-data-telefone/cliente-data-telefone.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ClienteRoutingModule
  ],
  declarations: [ClienteComponent, ClienteDataComponent, ClienteDataTelefoneComponent],
  providers: [ClienteService, BancoService, OperadoraService, TipoSocioService, SecretariaService]
})
export class ClienteModule { }
