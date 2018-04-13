import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {GeraRemessaComponent} from './gera-remessa.component';

const routes: Routes = [
  {path: '', component: GeraRemessaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeraRemessaRoutingModule {
}

export const routedComponents = [GeraRemessaComponent];
