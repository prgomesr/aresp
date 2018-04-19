import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CaixaDiarioComponent} from './caixa-diario.component';

const routes: Routes = [
  {path: '', component: CaixaDiarioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaixaDiarioRoutingModule {
}

export const routedComponents = [CaixaDiarioComponent];
