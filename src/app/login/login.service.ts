import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService 
{
  base = environment.servidor;
  constructor(protected http:HttpClient){ }
  login(request : any){
    return this.http.post("http://localhost/VETERINARIAPROYECTO/index.php/api/login", request);    
    //return this.http.get("http://localhost:82/VETERINARIAPROYECTO/index.php/api/login/getlistausuarios2", request);    
  }
  lista_usuarios()
  {
    return this.http.get("http://localhost/VETERINARIAPROYECTO/index.php/api/usuarios/getlistausuarios2");
  }
}
