import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { NavbarComponent } from './navbar/navbar.component';
import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    CoreRoutingModule
  ],
  declarations: [NavbarComponent, LayoutComponent],
  exports: [NavbarComponent]
})
export class CoreModule { }
