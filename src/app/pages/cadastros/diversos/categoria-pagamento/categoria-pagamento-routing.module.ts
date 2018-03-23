import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CategoriaPagamentoComponent} from './categoria-pagamento.component';
import {CategoriaPagamentoDataComponent} from './categoria-pagamento-data/categoria-pagamento-data.component';

const routes: Routes = [
  {path: '', component: CategoriaPagamentoComponent},
  {path: 'novo', component: CategoriaPagamentoDataComponent},
  {path: 'editar/:id', component: CategoriaPagamentoDataComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaPagamentoRoutingModule {
}

export const routedComponents = [CategoriaPagamentoComponent];
