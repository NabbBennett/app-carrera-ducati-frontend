import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user = {
    nombre: '',
    apellidos: '',
    email: '',
    password: '',
    telefono: '',
    ciudad: '',
    edad: null as number|null,
    terms: false
  };

  onSubmit(): void {
    console.log('register', this.user);
  }
}
