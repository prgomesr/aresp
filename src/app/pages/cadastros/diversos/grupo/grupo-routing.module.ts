import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {GrupoComponent} from './grupo.component';
import {GrupoDataComponent} from './grupo-data/grupo-data.component';

const routes: Routes = [
  {path: '', component: GrupoComponent},
  {path: 'novo', component: GrupoDataComponent},
  {path: 'editar/:id', component: GrupoDataComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrupoRoutingModule {
}

export const routedComponents = [GrupoComponent];
