import { Component, OnInit , OnDestroy} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { ModalService } from 'src/app/services/modal.service';
import { ActiveActionDetail }  from 'src/app/api.interfaces'
import { ActionsService } from 'src/app/services/actions.service';
@Component({
  selector: 'app-acciones',
  templateUrl: './acciones.component.html',
  styleUrls: ['./acciones.component.scss']
})
export class AccionesComponent implements OnInit, OnDestroy {

  flagHeight:boolean=false;
  flagMostrar:boolean=false;
  flagOpc:boolean=false;
  flagOpcMostrar:boolean=false;
  flagOpcSelect:number=0;
  flagOpcDonativos:boolean=false;
  flagOpcAcciones:boolean=false;
  flagSelect:boolean=false;
  flag:boolean=false;

  killall = new Subject()
  allActions:ActiveActionDetail[] = []
  accionGenericaGroup:FormGroup

  public promotores:Array<number>=[1];


  constructor(public modalService:ModalService, private fb: FormBuilder, private actionsService: ActionsService) {
    this.accionGenericaGroup = this.fb.group({
      name:[''],
      type:[''],
      description:[''],
      chapters:[''],
      amount_goal:[''],
      colors:[''],
      end_date:[''],
      recurrency:[''],
      scope:[''],
      promotorId:[''],
      temporality:[''],
      country:[''],
      state:[''],
      zipcode:[''],
      image:[null],
      impact:[''],
      co_dos_saved:[''],
      liters_saved:[''],
      verification:[''],
      share:[''],
      share_image:[null]
    })
  }

  ngOnInit(): void {

    this.actionsService.loadActions().pipe(
      take(1)
    ).subscribe((actions) => {
      this.allActions = actions;
      console.log(this.allActions);

    })
  }

  ngOnDestroy(){
    this.killall.next();
    this.killall.complete();
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

  crearAccion(){

    this.actionsService.createAction(this.createFormData(this.accionGenericaGroup.value)).pipe(
      take(1),
      takeUntil(this.killall)
    ).subscribe({
      next: response =>{
        console.log(response);

      },
      error : err => {
        console.log(err);

      }
    })

  }

  createFormData(payload: any): FormData {
    const formData = new FormData();
    for (const [key, value] of Object.entries(payload)) {
      if (value && key !== 'username' && key !== 'email') {
        formData.append(key, value as string);
      }
    }
    return formData;
  }

  onFileChange(event:any,input:string) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
     input === 'image' ?
     this.accionGenericaGroup.patchValue({
        image: file
      }) :
      this.accionGenericaGroup.patchValue({
        share_image: file
      })
    }
  }
}
