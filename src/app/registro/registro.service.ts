import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroService 
{
  base = environment.servidor;
  constructor(protected http:HttpClient){ }
  guardarRegistro(request : any){
    
    return this.http.post("http://172.19.0.1:8080/post", request);       

    //return this.http.post("http://localhost/VETERINARIAPROYECTO/index.php/api/login/prueba", request); 
  }

  listaRegistros()
  {
    return this.http.get("http://172.19.0.1:8080/message");
    //return this.http.get("http://localhost/VETERINARIAPROYECTO/index.php/api/login/getlistausuarios");
  }
  
}