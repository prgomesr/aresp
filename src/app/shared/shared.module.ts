import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageComponent } from './message/message.component';

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
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MessageComponent],
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
    MessageComponent
  ]
})
export class SharedModule { }
