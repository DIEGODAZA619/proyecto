import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { Router } from '@angular/router';
import { Buffer } from 'buffer';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit 
{
  datos:any = [];
  
  constructor(protected usuarios: UsuariosService, protected router:Router) 
  {
    //console.log(Buffer.from("Hello World").toString('base64'));
    //console.log(Buffer.from("SGVsbG8gV29ybGQ=", 'base64').toString('binary'))

    this.usuarios.lista_usuarios().subscribe(
      (res:any) => {
        //console.log(res);
        this.datos = res.datos;
      },
      (error:any)=>{
        //console.log(error);
        this.router.navigate(["/login"]);
      }
    );
  }

  ngOnInit(): void {
  }

}
