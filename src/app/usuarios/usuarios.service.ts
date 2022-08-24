import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Buffer } from 'buffer';



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  base = environment.servidor
  reqHeader : HttpHeaders;  
  tokenguardado : any = localStorage.getItem('token');

  token: any = Buffer.from(this.tokenguardado, 'base64').toString('binary');

  //token : any = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZHVzdWFyaW8iOiIxIiwiZmVjaGEiOiIyMDIxLTExLTE4IDExOjIxOjM3IiwiaWF0IjoxNjM3MjMwODk3LCJleHAiOjE2MzcyMzQ0OTd9._YBY4tQ0u4LkZJLSvO-DkFlxuQ6KzIYE7B_eth2nU4g';
  constructor(protected http:HttpClient) { 
    //console.log(this.token);
    this.reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : this.token       
    })
  }

  lista_usuarios()
  {
    //console.log(this.reqHeader);
    return this.http.get(this.base + "/usuarios/getlistausuarios",{headers:this.reqHeader});
  }
  
}
