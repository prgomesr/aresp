import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FornecedorDataComponent } from './fornecedor-data/fornecedor-data.component';
import { FornecedorRoutingModule } from './fornecedor-routing.module';
import { FornecedorComponent } from './fornecedor.component';
import { SharedModule } from '../../../../shared/shared.module';
import { FornecedorService } from './fornecedor.service';

@NgModule({
  imports: [
    CommonModule,
    FornecedorRoutingModule,
    SharedModule
  ],
  declarations: [FornecedorComponent, FornecedorDataComponent],
  providers: [FornecedorService]
})
export class FornecedorModule { }
