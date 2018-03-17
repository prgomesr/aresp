import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TipoRecebimentoComponent} from './tipo-recebimento.component';
import {TipoRecebimentoDataComponent} from './tipo-recebimento-data/tipo-recebimento-data.component';

const routes: Routes = [
  {path: '', component: TipoRecebimentoComponent},
  {path: 'novo', component: TipoRecebimentoDataComponent},
  {path: 'editar/:id', component: TipoRecebimentoDataComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoRecebimentoRoutingModule {
}

export const routedComponents = [TipoRecebimentoComponent];
