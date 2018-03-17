import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TipoSocioComponent} from './tipo-socio.component';
import {TipoSocioDataComponent} from './tipo-socio-data/tipo-socio-data.component';

const routes: Routes = [
  {path: '', component: TipoSocioComponent},
  {path: 'novo', component: TipoSocioDataComponent},
  {path: 'editar/:id', component: TipoSocioDataComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoSocioRoutingModule {
}

export const routedComponents = [TipoSocioComponent];
