import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from './publicaciones.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
  cargando:boolean = false;
  datos:any = [];
  constructor(protected publicaciones: PublicacionesService) 
  {
    this.publicaciones.lista_publicaciones().subscribe(
      (res:any) => {
        console.log(res);        
        this.datos = res;
      },
      (error:any)=>{
        console.log(error);        
      }
    );
  }

  
  ngOnInit(): void {
  }

}
