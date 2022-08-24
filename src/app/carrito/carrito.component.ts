import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit 
{
  titulo:string; 
  estado: boolean;
  categorias: any = [];
  productos: any = [];
  productosprueba: any = [];
  valordato : any = "";
  carrito: any = [];
  cant_venta:number = 1;
  total_pagar: number = 0;


  productoForm = new FormGroup({
    nombre: new FormControl(''),
    precio: new FormControl(''),
    cantidad: new FormControl(''),
  });
  constructor() 
  {
    this.titulo = 'CARRITO DE COMPRAS';
    this.estado = true;
    this.categorias.push("ROPA");
    this.categorias.push("MUEBLES");
    this.categorias.push("JUGUETES");
    //--------------------------------
    this.productos.push({
                       nombre: "chamarra", 
                       precio: 250,
                       cantidad : 12
                       });
    
    this.productos.push({
                        nombre: "pelota",
                        precio: 100,
                        cantidad : 20
                        });
    this.productos.push({
                        nombre: "sombrero",
                        precio: 50,
                        cantidad : 10
                        });
    this.productos.push({
                        nombre: "polera",
                        precio: 40,
                        cantidad : 20
                        });                         
    this.productos.push({
                        nombre: "frazada",
                        precio: 80,
                        cantidad : 10
                        });
    this.productos.push({
                        nombre: "estuche",
                        precio: 25,
                        cantidad : 60
                        });
    this.productos.push({
                        nombre: "teclado",
                        precio: 30,
                        cantidad : 11
                        });
  }

  ngOnInit(): void {
  }

  cerrar_tienda()
  {
    if (this.estado)
    {
      this.estado = false;
    }
    else
    {
      this.estado = true;
    }    
  }
  eliminar_producto(i : number)
  {
    this.productos.splice(i,1);
  }
  agregar_productos()
  {
    this.productos.push(this.productoForm.value);
    //this.productosprueba = this.productoForm.value;
    //this.valordato = this.productosprueba.precio;
  }
  agregar_carrito(prod : any)
  {
    this.carrito.push({
      nombre : prod.nombre,
      precio : prod.precio,
      cantidad :this.cant_venta,
      sub_total : prod.precio * this.cant_venta
    });
    this.calcular_total_pagar();
    this.cant_venta = 1;
  } 
  cambio(data : any)
  {
    this.cant_venta = data.target.value;
  }

  calcular_total_pagar()
  {
    this.total_pagar = 0;
    for(let i=0; i < this.carrito.length; i++)
    {
      this.total_pagar += this.carrito[i].sub_total; 
    }

  }
  eliminar_carrito(i : number)
  {
    this.carrito.splice(i,1);
    this.calcular_total_pagar();

  }
}
