import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recompensas',
  templateUrl: './recompensas.component.html',
  styleUrls: ['./recompensas.component.scss']
})
export class RecompensasComponent implements OnInit {

  flagMostrar:boolean=false;
  flagAgregar:boolean=false;


  constructor() { }

  ngOnInit(): void {
  }

  mostrar(flag:boolean){
    this.flagMostrar= flag;
    this.flagAgregar= flag;
  }

  agregar(flag:boolean){
    this.flagAgregar= flag;
  }

}
