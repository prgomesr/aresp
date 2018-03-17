import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ContasPagarComponent} from './contas-pagar.component';
import {ContasPagarDataComponent} from './contas-pagar-data/contas-pagar-data.component';

const routes: Routes = [
  {path: '', component: ContasPagarComponent},
  {path: 'novo', component: ContasPagarDataComponent},
  {path: 'editar/:id', component: ContasPagarDataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContasPagarRoutingModule {
}

export const routedComponents = [ContasPagarComponent];
