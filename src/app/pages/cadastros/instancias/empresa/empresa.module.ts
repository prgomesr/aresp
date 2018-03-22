import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmpresaRoutingModule} from './empresa-routing.module';
import { EmpresaDataComponent } from './empresa-data/empresa-data.component';
import {EmpresaComponent} from './empresa.component';
import { SharedModule } from '../../../../shared/shared.module';
import { EmpresaService } from './empresa.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EmpresaRoutingModule
  ],
  declarations: [EmpresaComponent, EmpresaDataComponent],
  providers: [EmpresaService]
})
export class EmpresaModule { }
