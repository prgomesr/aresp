import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {StatusParcelaComponent} from './status-parcela.component';
import {StatusParcelaDataComponent} from './status-parcela-data/status-parcela-data.component';

const routes: Routes = [
  {path: '', component: StatusParcelaComponent},
  {path: 'novo', component: StatusParcelaDataComponent},
  {path: 'editar/:id', component: StatusParcelaDataComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatusParcelaRoutingModule {
}

export const routedComponents = [StatusParcelaComponent];
