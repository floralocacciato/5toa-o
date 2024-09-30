import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
