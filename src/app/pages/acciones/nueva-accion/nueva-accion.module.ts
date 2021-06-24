import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NuevaAccionComponent } from './nueva-accion/nueva-accion.component';

const routes: Routes = [
  { path: '', component: NuevaAccionComponent }
];

@NgModule({
  declarations: [NuevaAccionComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
})
export class NuevaAccionModule { }
