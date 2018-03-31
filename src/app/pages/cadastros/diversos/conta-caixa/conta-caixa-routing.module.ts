import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ContaCaixaComponent} from './conta-caixa.component';
import {ContaCaixaDataComponent} from './conta-caixa-data/conta-caixa-data.component';

const routes: Routes = [
  {path: '', component: ContaCaixaComponent},
  {path: 'novo', component: ContaCaixaDataComponent},
  {path: 'editar/:id', component: ContaCaixaDataComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContaCaixaRoutingModule {
}

export const routedComponents = [ContaCaixaComponent];
