import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ConvenioComponent} from './convenio.component';
import {ConvenioDataComponent} from './convenio-data/convenio-data.component';

const routes: Routes = [
  {path: '', component: ConvenioComponent},
  {path: 'novo', component: ConvenioDataComponent},
  {path: 'editar/:id', component: ConvenioDataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvenioRoutingModule {
}

export const routedComponents = [ConvenioComponent];
