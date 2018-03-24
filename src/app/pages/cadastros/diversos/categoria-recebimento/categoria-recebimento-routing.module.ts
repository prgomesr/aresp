import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { CategoriaRecebimentoComponent } from './categoria-recebimento.component';
import { CategoriaRecebimentoDataComponent } from './categoria-recebimento-data/categoria-recebimento-data.component';

const routes: Routes = [
  {path: '', component: CategoriaRecebimentoComponent},
  {path: 'novo', component: CategoriaRecebimentoDataComponent},
  {path: 'editar/:id', component: CategoriaRecebimentoDataComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaRecebimentoRoutingModule {
}

export const routedComponents = [CategoriaRecebimentoComponent];
