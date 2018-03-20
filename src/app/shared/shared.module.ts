import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MessageComponent } from './message/message.component';
import { HeaderLv1Component } from './header-lv1/header-lv1.component';
import { HeaderLv2Component } from './header-lv2/header-lv2.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgxMaskModule } from 'ngx-mask';

import { TooltipModule } from 'primeng/tooltip';
import { DataTableModule } from 'primeng/datatable';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BsDatepickerModule.forRoot(),
    TypeaheadModule.forRoot(),
    NgxMaskModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  declarations: [MessageComponent, HeaderLv1Component, HeaderLv2Component],
  exports: [
    FormsModule, TooltipModule, CommonModule, DataTableModule, FileUploadModule, TableModule, CurrencyMaskModule, MessageComponent,
    HeaderLv1Component, HeaderLv2Component, BsDatepickerModule, TypeaheadModule, NgxMaskModule, TabsModule, ButtonsModule
  ]
})
export class SharedModule { }
