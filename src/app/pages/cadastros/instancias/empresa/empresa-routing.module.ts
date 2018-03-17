import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {EmpresaComponent} from './empresa.component';
import {EmpresaDataComponent} from './empresa-data/empresa-data.component';

const routes: Routes = [
  {path: '', component: EmpresaComponent},
  {path: 'novo', component: EmpresaDataComponent},
  {path: 'editar/:id', component: EmpresaDataComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpresaRoutingModule {
}

export const routedComponents = [EmpresaComponent];
