import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  flagMostrar:boolean=false;
  flagOpc:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  mostrar(flag:boolean){
    this.flagMostrar= flag;
  }

  cambiarOpc(flag:boolean){
    this.flagOpc= flag;
  }

}
