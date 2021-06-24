import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccionesRoutingModule } from './acciones-routing.module';

import { ModalModule } from 'src/app/components/modal/modal.module';
import { AccionesComponent } from './acciones/acciones/acciones.component';



@NgModule({
  declarations: [
    AccionesComponent
  ],
  imports: [
    CommonModule,
    AccionesRoutingModule,
    ModalModule
  ]
})
export class AccionesModule { }
