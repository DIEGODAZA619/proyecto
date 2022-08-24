import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { Buffer } from 'buffer';
import { RegistroService } from './registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  resultado:string = "";
  estadoregistro:boolean=false;
  token:any;
  datos:any = []; 
  registroForm = new FormGroup({
   
    message : new FormControl('',[Validators.required])
  });

  constructor(protected registroService: RegistroService, protected router:Router) { 
    this.cargarTabla();
  }

  ngOnInit(): void {
  }

  ingresar()
  {
    //console.log(this.loginForm.value);

    this.registroService.guardarRegistro(this.registroForm.value).subscribe(
      (res:any) =>{
        //console.log(res);
        this.estadoregistro = true;
        this.resultado = res;
        this.cargarTabla();
        /*if(res.error == false)
        {          
          this.estadoregistro = true;
          this.resultado = res;
          this.cargarTabla();
        }
        else
        {
          this.estadoregistro = true;
          this.resultado = res.mensaje; 
        }*/
      },
      (error:any)=>{
        console.log(error);
      }
    );
  }

  cargarTabla()
  {
    this.registroService.listaRegistros().subscribe(
      (res:any) => {
        console.log(res);        
        this.datos = res.content;
      },
      (error:any)=>{
        console.log(error);        
      }
    );
  }

}






