import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-acciones',
  templateUrl: './acciones.component.html',
  styleUrls: ['./acciones.component.scss']
})
export class AccionesComponent implements OnInit {

  flagHeight:boolean=false;
  flagMostrar:boolean=false;
  flagOpc:boolean=false;
  flagOpcMostrar:boolean=false;
  flagOpcSelect:number=0;
  flagOpcDonativos:boolean=false;
  flagOpcAcciones:boolean=false;
  flagSelect:boolean=false;
  flag:boolean=false;

  public promotores:Array<number>=[1];


  constructor(public modalService:ModalService) { }

  ngOnInit(): void {
  }
  eliminarAccion(): void {
    this.modalService.toggleModal('modal-dashboard');
  }
  cambiarHeight(flag:boolean){
    this.flagHeight= flag;
  }

  mostrar(flag:boolean){
    this.flagMostrar= flag;
  }

  cambiarOpc(flag:boolean){
    this.flagOpc= flag;
  }

  cambiarOpcMostrar(flag:boolean){
    this.flagOpcMostrar= flag;
    this.flagOpc= flag;
  }

  cambiarOpcSelect(flag:number){
    this.flagOpcSelect= flag;
  }

  cambiarOpcDonativos(flag:boolean){
    this.flagOpcDonativos= flag;
  }

  cambiarOpcAcciones(flag:boolean){
    this.flagOpcAcciones= flag;
  }

  cambiarSelect(evt:any,opcSelect:number){
    evt.preventDefault();
    this.flagOpcSelect= opcSelect;
    this.flagSelect= false;
    this.flagOpcDonativos= false;
    this.flagOpcAcciones= false;
  }

  cambiarlabel(flag:boolean){
    this.flagSelect= flag;
  }


  agregarPromotores(){
    this.promotores.push(1);
  }

  eliminarPromotor(index:number){
    this.promotores.splice(index,1);
  }
}
