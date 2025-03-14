import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css'
})
export class CadastroClienteComponent {
  name: string = '';
  age: number | null = null;

  register() {
    console.log('Nome:', this.name);
    console.log('Idade:', this.age);
    alert(`Registro realizado com sucesso!\nNome: ${this.name}\nIdade: ${this.age}`);
  }

   constructor(private router: Router) {}
  
    goToList() {
      this.router.navigate(['/clientes']);
    }
  
}
