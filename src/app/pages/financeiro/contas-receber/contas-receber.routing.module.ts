import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContasReceberComponent } from './contas-receber.component';
import { ContasReceberDataComponent } from './contas-receber-data/contas-receber-data.component';
import { ContasReceberLoteComponent } from './contas-receber-lote/contas-receber-lote.component';
import { ContasReceberBaseAnteriorComponent } from './contas-receber-base-anterior/contas-receber-base-anterior.component';

const routes: Routes = [
  {path: '', component: ContasReceberComponent},
  {path: 'novo', component: ContasReceberDataComponent},
  {path: 'novo-lote', component: ContasReceberLoteComponent},
  {path: 'novo-base-anterior', component: ContasReceberBaseAnteriorComponent},
  {path: 'editar/:id', component: ContasReceberDataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContasReceberRoutingModule {
}

export const routedComponents = [ContasReceberComponent];
