import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})

export class EmpresasComponent implements OnInit {

  flagMostrar:boolean=false;
  flagAgregar:boolean=false;
  flagOpc:number=1;

  flagCheck5:boolean=false;

  flagSwicth:boolean=false;


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

  cambiarOpc(opc:number){
    this.flagOpc= opc;
    if(opc==3){
      this.flagCheck5=true;
    }
    else{
      this.flagCheck5=false;
    }
    
  }

  cambio(evt:any,flag:boolean){
    evt.preventDefault();
    this.flagSwicth= flag;
  }

}
