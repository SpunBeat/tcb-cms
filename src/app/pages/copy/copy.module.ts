import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyRoutingModule } from './copy-routing.module';
import { CopyComponent } from './copy.component';



@NgModule({
  declarations: [
    CopyComponent
  ],
  imports: [
    CommonModule,
    CopyRoutingModule
  ]
})
export class CopyModule { }
