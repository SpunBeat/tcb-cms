import { Component, EventEmitter, Input, OnInit, Output , OnDestroy} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { ActionDetail } from 'src/app/api.interfaces';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-accion-generica-form',
  templateUrl: './accion-generica-form.component.html',
  styleUrls: ['./accion-generica-form.component.scss']
})
export class AccionGenericaFormComponent implements OnInit , OnDestroy{

  accionGenericaGroup:FormGroup | undefined
  @Output() change = new EventEmitter();
  @Input() actionDetail?: ActionDetail

  killall = new Subject();

  promotores:Array<number>=[1];


  constructor( public modalService:ModalService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initFormGroup(this.actionDetail)
  }

  ngOnDestroy(): void {
    this.killall.next();
    this.killall.complete();
  }

  initFormGroup(action:any){
    this.accionGenericaGroup = this.fb.group({
      name:[action?.name || ''],
      type:[action?.type || ''],
      description:[action?.description || ''],
      chapters:[''],
      amount_goal:[action?.amount_goal || ''],
      colors:[action?.colors || ''],
      end_date:[action?.end_date?.date || ''],
      recurrency:[action?.recurrency || ''],
      scope:[action?.scope || ''],
      temporality:[action?.temporality || ''],
      country:[action?.country || ''],
      state:[action?.state || ''],
      zipcode:[action?.zipcode || ''],
      image:[action?.image || null],
      impact:[action?.impact || ''],
      co_dos_saved:[action?.co2_saved || ''],
      liters_saved:[action?.liters_saved || ''],
      verification:[action?.verification || ''],
      share:[action?.share_text || ''],
      share_image:[action?.share_image || null]
    })
  }

  onFileChange(event:any,input?:string) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
     input === 'image' ?
     this.accionGenericaGroup?.patchValue({
        image: file
      }) :
      this.accionGenericaGroup?.patchValue({
        share_image: file
      })
    }
  }

  eliminarAccion(): void {
    this.modalService.toggleModal('modal-dashboard');
  }

  agregarPromotores(){
    this.promotores.push(1);
  }

  eliminarPromotor(index:number){
    this.promotores.splice(index,1);
  }

}
