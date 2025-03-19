import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
 
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { MatCardModule } from '@angular/material/card';
 import { MatInputModule } from '@angular/material/input';
 import { MatButtonModule } from '@angular/material/button';
 import { MatFormFieldModule } from '@angular/material/form-field';
 import { FormsModule } from '@angular/forms';
 import {MatIconModule} from '@angular/material/icon';
 import { ClientesListarComponent } from './clientes-listar/clientes-listar.component';
 import { MatListModule } from '@angular/material/list';
 
 
 
 
 
 @NgModule({
   declarations: [
     CadastroClienteComponent,
     ClientesListarComponent
   ],
   imports: [
     CommonModule,FormsModule,MatFormFieldModule,MatButtonModule,MatCardModule,MatInputModule,MatButtonModule,MatIconModule,MatListModule
   ]
 })
 export class ClientesModule { }
