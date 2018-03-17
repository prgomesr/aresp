import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {OperadoraComponent} from './operadora.component';
import {OperadoraDataComponent} from './operadora-data/operadora-data.component';

const routes: Routes = [
  {path: '', component: OperadoraComponent},
  {path: 'novo', component: OperadoraDataComponent},
  {path: 'editar/:id', component: OperadoraDataComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperadoraRoutingModule {
}

export const routedComponents = [OperadoraComponent];
