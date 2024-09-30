import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {
  constructor (public productoservicio: ProductosService){}

 

  subirFavorito(producto:any){
    producto.favoritos=!producto.favoritos
  
    this.productoservicio.getProductosFavoritos()
    this.productoservicio.contarProductosFavoritos()
   }
  
}
