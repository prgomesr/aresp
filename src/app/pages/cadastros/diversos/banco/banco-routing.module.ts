import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BancoComponent} from './banco.component';
import {BancoDataComponent} from './banco-data/banco-data.component';

const routes: Routes = [
  {path: '', component: BancoComponent},
  {path: 'novo', component: BancoDataComponent},
  {path: 'editar/:id', component: BancoDataComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BancoRoutingModule {
}

export const routedComponents = [BancoComponent];
