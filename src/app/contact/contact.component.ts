import { Component } from '@angular/core';
import { FormControl } from '@angular/forms'; // para validar inputs en formularios reactivos
import { Validators } from '@angular/forms';// para validaciones de los formularios
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 constructor (private contactForm: FormBuilder) {}

 formUser = this.contactForm.group(
  {
    nombre: ['', [Validators.required,Validators.minLength(6)]],
    email: ['', [Validators.required,Validators.email]],
    mensaje: ['', Validators.required]
  }
 )

 get mensaje (){
  return this.formUser.get('mensaje') as FormControl
 }

 get nombre() {
  return this.formUser.get('nombre') as FormControl
 }

get email() {
  return this.formUser.get('email') as FormControl
 }

 enviarCorreo(){
  alert ("correo enviado con exito")
  this.formUser.reset();
 }
}
