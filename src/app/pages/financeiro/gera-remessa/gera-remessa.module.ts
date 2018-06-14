import {NgModule} from '@angular/core';

import { GeraRemessaComponent } from './gera-remessa.component';
import { GeraRemessaRoutingModule } from './gera-remessa-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { ContasReceberService } from '../contas-receber/contas-receber.service';
import { GrupoService } from '../../cadastros/diversos/grupo/grupo.service';
import {HttpService} from '../../../shared/http/http.service';

@NgModule({
  imports: [GeraRemessaRoutingModule, SharedModule],
  exports: [],
  declarations: [GeraRemessaComponent],
  providers: [ContasReceberService, GrupoService, HttpService],
})
export class GeraRemessaModule {
}
