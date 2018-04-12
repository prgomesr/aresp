import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MessageComponent } from './message/message.component';
import { HeaderLv1Component } from './header-lv1/header-lv1.component';
import { HeaderLv2Component } from './header-lv2/header-lv2.component';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { Ng2BRPipesModule } from 'ng2-brpipes';

import { TooltipModule } from 'primeng/tooltip';
import { DataTableModule } from 'primeng/datatable';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { KeyFilterModule } from 'primeng/keyfilter';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
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
    HeaderLv1Component, HeaderLv2Component, TabsModule, ButtonsModule,
    ModalModule, TableComponent, ButtonComponent, Ng2BRPipesModule, ReactiveFormsModule, DropdownModule, DialogModule,
    InputTextModule, SelectButtonModule, CalendarModule, CheckboxModule, InputMaskModule, InputTextareaModule, PanelModule,
    ButtonModule, RadioButtonModule, KeyFilterModule
  ]
})
export class SharedModule { }
