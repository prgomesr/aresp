import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SecretariaComponent} from './secretaria.component';
import {SecretariaDataComponent} from './secretaria-data/secretaria-data.component';

const routes: Routes = [
  {path: '', component: SecretariaComponent},
  {path: 'novo', component: SecretariaDataComponent},
  {path: 'editar/:id', component: SecretariaDataComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecretariaRoutingModule {
}

export const routedComponents = [SecretariaComponent];
