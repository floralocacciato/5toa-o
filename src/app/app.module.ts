import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// modulos de rutas
import { RouterModule, Routes } from '@angular/router';
// componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
//angular material
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { CarritoComponent } from './carrito/carrito.component';
import { DetalleproductoComponent } from './detalleproducto/detalleproducto.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';


const rutas: Routes =[
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'galeria',
    component: GaleriaComponent
  }, 

  {
    path: 'galeria/:id',
    component: DetalleproductoComponent
  }, 
  
  {
    path: 'favoritos',
    component: FavoritosComponent
  },

  {
    path: 'carrito',
    component: CarritoComponent
  },
 {
  path: 'contacto',
  component: ContactComponent
 }
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GaleriaComponent,
    FavoritosComponent,
    CarritoComponent,
    DetalleproductoComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule, 
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule, MatFormFieldModule, MatSelectModule, NgFor, MatInputModule,ReactiveFormsModule,MatBadgeModule,MatTableModule,

   RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
