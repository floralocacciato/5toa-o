import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
  
})
export class GaleriaComponent {
  constructor (public productoservicio: ProductosService){}

  

 subirFavorito(producto:any){
  producto.favoritos=!producto.favoritos

  this.productoservicio.getProductosFavoritos()
  this.productoservicio.contarProductosFavoritos()
 }

 agregarAlCarrito(producto:any){
  this.productoservicio.agregarAlCarrito(producto)
  console.log('Agregando al carrito:', producto);
}


 
}
