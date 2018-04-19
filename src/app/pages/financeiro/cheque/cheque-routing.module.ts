import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ChequeComponent} from './cheque.component';

const routes: Routes = [
  {path: '', component: ChequeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChequeRoutingModule {
}

export const routedComponents = [ChequeComponent];
