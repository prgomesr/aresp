import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MessageComponent } from './message/message.component';
import { HeaderLv1Component } from './header-lv1/header-lv1.component';
import { HeaderLv2Component } from './header-lv2/header-lv2.component';

import { TooltipModule } from 'primeng/tooltip';
import { DataTableModule } from 'primeng/datatable';
import { TabViewModule } from 'primeng/tabview';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CurrencyMaskModule } from 'ng2-currency-mask';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MessageComponent, HeaderLv1Component, HeaderLv2Component],
  exports: [
    FormsModule,
    TooltipModule,
    CommonModule,
    DataTableModule,
    TabViewModule,
    CalendarModule,
    FileUploadModule,
    InputTextModule,
    SelectButtonModule,
    DropdownModule,
    InputTextareaModule,
    InputMaskModule,
    TableModule,
    CheckboxModule,
    SplitButtonModule,
    CurrencyMaskModule,
    MessageComponent,
    HeaderLv1Component,
    HeaderLv2Component
  ]
})
export class SharedModule { }
