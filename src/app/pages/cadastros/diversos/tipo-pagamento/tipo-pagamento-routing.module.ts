import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TipoPagamentoComponent} from './tipo-pagamento.component';
import {TipoPagamentoDataComponent} from './tipo-pagamento-data/tipo-pagamento-data.component';

const routes: Routes = [
  {path: '', component: TipoPagamentoComponent},
  {path: 'novo', component: TipoPagamentoDataComponent},
  {path: 'editar/:id', component: TipoPagamentoDataComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoPagamentoRoutingModule {
}

export const routedComponents = [TipoPagamentoComponent];
