import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AgenciaComponent} from './agencia.component';
import {AgenciaDataComponent} from './agencia-data/agencia-data.component';

const routes: Routes = [
  {path: '', component: AgenciaComponent},
  {path: 'novo', component: AgenciaDataComponent},
  {path: 'editar/:id', component: AgenciaDataComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgenciaRoutingModule {
}

export const routedComponents = [AgenciaComponent];
