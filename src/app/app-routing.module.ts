import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './core/login/login.component';


const routes: Routes = [
  { path: '', loadChildren: './core/core.module#CoreModule' },
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
