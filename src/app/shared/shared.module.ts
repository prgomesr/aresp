import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MessageComponent } from './message/message.component';
import { HeaderLv1Component } from './header-lv1/header-lv1.component';
import { HeaderLv2Component } from './header-lv2/header-lv2.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgxMaskModule } from 'ngx-mask';

import { TooltipModule } from 'primeng/tooltip';
import { DataTableModule } from 'primeng/datatable';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { TableComponent } from './table/table.component';
import { ButtonComponent } from './button/button.component';
import { Ng2BRPipesModule } from 'ng2-brpipes';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BsDatepickerModule.forRoot(),
    TypeaheadModule.forRoot(),
    NgxMaskModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    TableModule,
    TooltipModule,
    ModalModule.forRoot(),
    Ng2BRPipesModule,
    ReactiveFormsModule
  ],
  declarations: [MessageComponent, HeaderLv1Component, HeaderLv2Component, TableComponent, ButtonComponent],
  exports: [
    FormsModule, TooltipModule, CommonModule, DataTableModule, FileUploadModule, TableModule, CurrencyMaskModule, MessageComponent,
    HeaderLv1Component, HeaderLv2Component, BsDatepickerModule, TypeaheadModule, NgxMaskModule, TabsModule, ButtonsModule,
    ModalModule, TableComponent, ButtonComponent, Ng2BRPipesModule, ReactiveFormsModule, DropdownModule, DialogModule
  ]
})
export class SharedModule { }
