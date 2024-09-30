import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-precio', 'demo-subtotal', 'demo-total'];

  constructor(public productoservicio: ProductosService) {
    this.dataSource = this.productoservicio.carrito;
  }

  dataSource: any[]; 

  carrito: any[] = []
  cantItemsCarrito: number = 0
  total: number = 0 

  calcularTotal() {
    this.carrito.forEach((element) => {
      element.subtotal = element.precio * element.cantidad;
      this.total += element.subtotal;
      this.total = +this.total.toFixed(2); //toFixed devuelve una cadena, por lo que el operador + se utiliza para convertirlo
    })
  };

  eliminarItem(producto: any) {
    const index = this.carrito.indexOf(producto);
    if (index !== -1) {
      this.carrito.splice(index, 1);
    }
    this.calcularTotal()
  }
}

