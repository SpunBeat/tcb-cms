import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditarAccionComponent } from './editar-accion/editar-accion.component'

const routes: Routes = [
  { path: ':id', component: EditarAccionComponent }
];

@NgModule({
  declarations: [EditarAccionComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
})
export class EditarAccionModule { }
