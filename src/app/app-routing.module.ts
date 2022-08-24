import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { LoginComponent } from './login/login.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { RegistroComponent } from './registro/registro.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


const routes: Routes = [
  {path:'carrito', component:CarritoComponent},
  {path:'publicaciones', component:PublicacionesComponent },
  {path:'usuarios', component:UsuariosComponent },
  {path:'login', component:LoginComponent },
  {path:'registro', component:RegistroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
