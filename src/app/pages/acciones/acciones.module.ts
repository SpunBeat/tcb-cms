import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccionesRoutingModule } from './acciones-routing.module';
import { AccionesComponent } from './acciones.component';
import { ModalModule } from 'src/app/components/modal/modal.module';



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
