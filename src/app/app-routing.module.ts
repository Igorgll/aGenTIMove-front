//módulos
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadprodutosComponent } from './cadprodutos/cadprodutos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { DetalheprodutoComponent } from './detalheproduto/detalheproduto.component';
import { ProdutosEditComponent } from './edit/produtos-edit/produtos-edit.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},

  {path:'login', component:LoginComponent},
  {path:'cadastro', component:CadastroComponent},
  {path:'inicio', component:InicioComponent},
  {path: 'cadprodutos', component: CadprodutosComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'categoria', component: CategoriasComponent},
  {path:'produtos-edit/:id', component:ProdutosEditComponent},
  {path:'detalheproduto/:id', component:DetalheprodutoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
