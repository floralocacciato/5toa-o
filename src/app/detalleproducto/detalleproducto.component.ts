import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';
import { ActivatedRoute } from '@angular/router';
import { isNgTemplate } from '@angular/compiler';
@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.css']
})
export class DetalleproductoComponent {

  producto: any; 
  constructor (private route: ActivatedRoute, public productoservicio: ProductosService){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id= +params['id'];
      this.producto= this.productoservicio.productos.find(item => item.id === id)
    });
  
  };
  subirFavorito(producto:any){
    producto.favoritos=!producto.favoritos
  
    this.productoservicio.getProductosFavoritos()
    this.productoservicio.contarProductosFavoritos()
   }
}
