import { Injectable } from '@angular/core';
declare var $: any;


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  toggleModal(idModal:string){
    $(`#${idModal}`).modal('toggle')
  }
}
