import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'financeiro/contas-pagar', loadChildren: '../pages/financeiro/contas-pagar/contas-pagar.module#ContasPagarModule' },
      { path: 'financeiro/contas-receber', loadChildren: '../pages/financeiro/contas-receber/contas-receber.module#ContasReceberModule' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {
}
