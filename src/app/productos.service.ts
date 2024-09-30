import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  productos: any[] = [


    {
      nombre: "Risport Ambra Elite + Roll Line Evo ",
      descripcion: "Bota Risport Ambra Elite, Indice de Rigidez 60, Plancha Roll Line Evo",
      tipo: "Patines",
      marca: "Risport",
      disciplina: "Libre",
      img: "../../assets/img/libre-ambraelite-evo.png",
      destacado: false,
      favoritos: false,
      cantidad: 1,
      nivel: "avanzado",
      precio: 784.00,
      id: 1,
    },

    {
      nombre: "Risport Mercurio + Roll Line Evo",
      descripcion: "Bota Risport Mercurio, Indice de Rigidez 65, Plancha Roll Line Evo ",
      tipo: "Patines",
      marca: "Risport",
      disciplina: "Libre",
      img: "../../assets/img/libre-mercurio-evo.png",
      destacado: false,
      favoritos: false,
      cantidad: 1,
      nivel: "profesional",
      precio: 854.00,
      id: 2,
    },

    {
      nombre: "Edea Fly + Roll Line Evo",
      descripcion: "Bota Edea Fly, Indice de Rigidez 60, Plancha Roll Line Evo",
      tipo: "Patines",
      disciplina: "Libre",
      marca: "Edea",
      img: "../../assets/img/libre-fly-evo.png",
      destacado: true,
      favoritos: false,
      cantidad: 1,
      nivel: "profesional",
      precio: 912.00,
      id: 3,

    },

    {
      nombre: " Estuche de Herramientas Professional Super",
      descripcion: "Estuche de Herramientas Super Professional",
      tipo: "Accesorios",
      marca: "Roll line",
      disciplina: "",
      img: "../../assets/img/accesorios-herramientas-rollline.png",
      destacado: true,
      favoritos: false,
      cantidad: 1,
      nivel: "",
      precio: 19,
      id: 4,

    },

    {
      nombre: "Edea Classic + Roll Line Variant C",
      descripcion: "Bota Edea Classic, Indice de Rigidez 25, Plancha Roll Line Variant",
      tipo: "Patines",
      disciplina: "Libre",
      marca: "Edea",
      img: "../../assets/img/libre-classica-variantc.png",
      destacado: true,
      favoritos: false,
      cantidad: 1,
      nivel: "Pre-Intermedio",
      precio: 365.00,
      id: 5,
    },

    {
      nombre: " Edea Fly + Roll Line Mistral ",
      descripcion: "Bota Edea Fly, Indice de Rigidez 60, Plancha Roll Line Mistral",
      tipo: "Patines",
      marca: "Edea",
      disciplina: "Libre",
      img: "../../assets/img/libre-fly-mistral.png",
      destacado: true,
      favoritos: false,
      cantidad: 1,
      nivel: "Intermedio",
      precio: 616.00,
      id: 6,
    },

    {
      nombre: " Edea Fly + Roll Line Linea",
      descripcion: "Bota Edea Fly, Indice de Rigidez 60, Plancha Roll Line Linea ",
      tipo: "Patines",
      marca: "Edea",
      disciplina: "Inline",
      img: "../../assets/img/inline-fly-linea.png",
      destacado: true,
      favoritos: false,
      cantidad: 1,
      nivel: "Avanzado",
      precio: 636.00,
      id: 7,

    },


    {
      nombre: " Edea Flamenco + Roll Line Dance",
      descripcion: "Botas Edea Flamenco, Planchas Roll Line Dance ",
      tipo: "Patines",
      marca: "Edea",
      disciplina: "Danza",
      img: "../../assets/img/danza-flamenco-dance.png",
      destacado: true,
      favoritos: false,
      cantidad: 1,
      nivel: "Intermedio",
      precio: 610.50,
      id: 8,

    },


    {
      nombre: "Edea Classica + Roll Line Dance ",
      descripcion: "Bota Edea Classica, Indice de Rigidez 25, Plancha Roll Line Dance ",
      tipo: "Patines",
      marca: "Edea",
      disciplina: "Danza",
      img: "../../assets/img/danza-classica-dance.png",
      destacado: false,
      favoritos: false,
      cantidad: 1,
      nivel: "Avanzado",
      precio: 517.00,
      id: 9,
    },

    {
      nombre: "Risport Electra + Saturno + Star",
      descripcion: "Botas Risport Electra Light, Plancha Roll Line Saturno",
      tipo: "Patines",
      marca: "Risport",
      disciplina: "Escuela",
      img: "../../assets/img/escuela-electra-saturno.png",
      destacado: true,
      favoritos: false,
      cantidad: 1,
      nivel: "intermedio",
      precio: 395.00,
      id: 10,
    },


    {
      nombre: "Risport RF 3 PRO + Saturno + Star ",
      descripcion: "Botas Risport RF3 PRO, Planchas Roll Line Saturno, Ruedas Boiani Star 63 mm / Roll Line Giotto 63mm",
      tipo: "Patines",
      marca: "Risport",
      disciplina: "Escuela",
      img: "../../assets/img/escuela-rf3pro-saturno.png",
      destacado: false,
      favoritos: false,
      cantidad: 1,
      nivel: "Avanzado",
      precio: 412.50,
      id: 11,
    },


    {
      nombre: " Rodamientos Roll Line ABEC 9",
      descripcion: "Rodamientos Roll Line ABEC 9. Set x 16",
      tipo: "Patines",
      marca: "Roll Line",
      disciplina: "Libre",
      img: "../../assets/img/libre-rulemanes-abec9rollline.png",
      destacado: false,
      favoritos: false,
      cantidad: 1,
      nivel: "Avanzado",
      precio: 40,
      id: 12,
    },


    {
      nombre: " Rodamientos Roll Line ABEC 9 Speed Max",
      descripcion: "Rodamientos Roll Line ABEC 9 Speed Max. Set x 16",
      tipo: "Patines",
      marca: "Roll Line",
      disciplina: "Libre",
      img: "../../assets/img/libre-rulemanes-abec9speedmax.png",
      destacado: true,
      favoritos: false,
      cantidad: 1,
      nivel: "Avanzado",
      precio: 45,
      id: 13,
    },


    {
      nombre: " Fundas térmico EDEA",
      descripcion: "Fundas térmico edea",
      tipo: "Accesorios",
      marca: "Edea",
      disciplina: "",
      img: "../../assets/img/accesorios-cubrebotas-edea.png",
      destacado: true,
      favoritos: false,
      cantidad: 1,
      nivel: "",
      precio: 18,
      id: 14,
    },


    {
      nombre: "Harness Aluminium ",
      descripcion: "Harness Aluminium",
      tipo: "Accesorios",
      marca: "",
      disciplina: "",
      img: "../../assets/img/accesorios-arnes-rollline.png",
      destacado: true,
      favoritos: false,
      cantidad: 1,
      nivel: "",
      precio: 599.00,
      id: 15,
    },


    {
      nombre: " Mochila Edea Libra",
      descripcion: "2 bolsillos reforzados y ventilados, 1 bolsillo central con bolsillo interno con cremallera, Puerto USB externo para unirse al banco de energìa interno (no incluido) para cargar el teléfono, Bolsillo externo para botella, Tirantes acolchados y ajustables, Espalda acolchada y transpirable, Bisagras reforzadas, Funda impermeable para mochilla para protecciòn contra la lluvia, Colores: Gris, Cielo and Negro",
      tipo: "Accesorios",
      marca: "Edea",
      disciplina: "",
      img: "../../assets/img/accesorios-bolsos-edea.png",
      destacado: true,
      favoritos: false,
      cantidad: 1,
      nivel: "",
      precio: 37.50,
      id: 16,
    },


    {
      nombre: "Bolsa Porta Ruedas Roll Line ",
      descripcion: "Bolsa Porta Ruedas Roll Line x 32 ruedas",
      tipo: "Accesorios",
      marca: "Roll Line",
      disciplina: "",
      img: "../../assets/img/accesorios-portaruedas-rollline.png",
      destacado: false,
      favoritos: false,
      cantidad: 1,
      nivel: "",
      precio: 30,
      id: 17,
    },

    {
      nombre: " Extractor de Rulemanes Roll Line",
      descripcion: "El Extractor de Rulemanes Roll Line le permite insertar y quitar fácilmente los rulemanes en las ruedas",
      tipo: "Accesorios",
      disciplina: "",
      img: "../../assets/img/accesorios-rulemanes-rollline.png",
      marca: "Roll line",
      destacado: false,
      favoritos: false,
      cantidad: 1,
      nivel: "",
      precio: 52,
      id: 18,
    },

    {
      nombre: "Rodamientos Komplex ABEC 9 Black Ceramic",
      descripcion: "Rodamientos / rulemanes Komplex ABEC 9 Black Ceramic",
      tipo: "Patines",
      disciplina: "Libre",
      marca: "Komplex",
      img: "../../assets/img/libre-rulemanes-komplex.png",
      destacado: false,
      favoritos: false,
      cantidad: 1,
      nivel: "",
      precio: 55,
      id: 19,
    }

  ]

  marcas: any[] = [
    {
      nombre: "roll line",
      img: "../../assets/img/marca-rollline.png"
    },

    {
      nombre: "risport",
      img: "../../assets/img/marca-risport.png"
    },

    {
      nombre: "edea",
      img: "../../assets/img/marca-edea.png"
    },

    {
      nombre: "komplex",
      img: "../../assets/img/marca-komplex.png"
    }
  ]


  //----------------favoritos-----------------------------------------
  // Metodo para contar productos favoritos
  productosFavoritos: any[] = [];
  getProductosFavoritos() {
    this.productosFavoritos = this.productos.filter(producto => producto.favoritos === true);

  }

  // Metodo para contar productos fvoritos
  cantidadProductosFavoritos: number = 0;
  contarProductosFavoritos() {
    this.cantidadProductosFavoritos = this.productos.filter(producto => producto.favoritos === true).length;
    // this.cantidadProductosFavoritos= this.cursosFavoritos.length
  }


  // carrito de compras --------------------------------------------------------
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

  // metodo para agregar o actualizar un elemento en el carrito

  agregarAlCarrito(producto: any) {  // Verificar si el elemento ya existe en el carrito
    this.total = 0
    const index = this.carrito.findIndex((element) => element.nombre === producto.nombre);
    if (index !== -1) {
      // Si el elemento existe, actualizar la cantidad
      this.carrito[index].cantidad = producto.cantidad;
    } else {
      // Si el elemento no existe, agregarlo al carrito
      const elemento = {
        ...producto, // Copiar todas las propiedades del objeto item
      };
      this.carrito.push(elemento);
    }
    this.cantItemsCarrito =this.carrito.length;


    // ------ calculando el total
    this.calcularTotal()
  }

  eliminarItem(producto: any) {
    const index = this.carrito.indexOf(producto);
    if (index !== -1) {
      this.carrito.splice(index, 1);
    }
    this.calcularTotal()
  }
}
