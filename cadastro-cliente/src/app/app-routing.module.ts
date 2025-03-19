import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './clientes/cadastro-cliente/cadastro-cliente.component';
import { ClientesListarComponent } from './clientes/clientes-listar/clientes-listar.component';

const routes: Routes = [
  {path:'',redirectTo:'/clientes',pathMatch:'full'},
  {
    path:'registrar',component: CadastroClienteComponent
  },
  {
    path:'clientes',component:ClientesListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
