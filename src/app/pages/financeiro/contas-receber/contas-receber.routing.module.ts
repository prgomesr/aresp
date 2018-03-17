import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ContasReceberComponent} from './contas-receber.component';
import {ContasReceberDataComponent} from './contas-receber-data/contas-receber-data.component';

const routes: Routes = [
  {path: '', component: ContasReceberComponent},
  {path: 'novo', component: ContasReceberDataComponent},
  {path: 'editar/:id', component: ContasReceberDataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContasReceberRoutingModule {
}

export const routedComponents = [ContasReceberComponent];
