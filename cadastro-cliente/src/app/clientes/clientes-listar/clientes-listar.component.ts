import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-listar',
  templateUrl: './clientes-listar.component.html',
  styleUrls: ['./clientes-listar.component.css']
})
export class ClientesListarComponent {
  customers = [
    { name: 'João Silva', age: 30 },
    { name: 'Maria Souza', age: 25 },
    { name: 'Carlos Oliveira', age: 40 }
  ];

  constructor(private router: Router) {}

  goToRegister() {
    this.router.navigate(['/registrar']);
  }
}
