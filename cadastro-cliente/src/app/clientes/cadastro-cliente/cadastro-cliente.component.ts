import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent {
  name: string = '';
  age: number | null = null;

  constructor(private router: Router) {}

  register() {
    console.log('Nome:', this.name); // <--- AQUI: Exibe o nome no console
    console.log('Idade:', this.age); // <--- AQUI: Exibe a idade no console
    alert(`Registro realizado com sucesso!\nNome: ${this.name}\nIdade: ${this.age}`);
  }

  goToList() {
    this.router.navigate(['/clientes']);
  }
}

