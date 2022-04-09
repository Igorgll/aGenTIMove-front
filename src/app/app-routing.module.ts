//módulos
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadprodutosComponent } from './cadprodutos/cadprodutos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ProdutosDeleteComponent } from './delete/produtos-delete/produtos-delete.component';
import { DetalheprodutoComponent } from './detalheproduto/detalheproduto.component';
import { ProdutosEditComponent } from './edit/produtos-edit/produtos-edit.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { TrabalheConoscoComponent } from './trabalhe-conosco/trabalhe-conosco.component';

const routes: Routes = [

  {path: '', redirectTo: 'inicio', pathMatch: 'full'},

  {path:'login', component:LoginComponent},
  {path:'cadastro', component:CadastroComponent},
  {path:'inicio', component:InicioComponent},
  {path: 'cadprodutos', component: CadprodutosComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'categoria', component: CategoriasComponent},
  {path:'produtos-edit/:id', component:ProdutosEditComponent},
  {path:'detalheproduto/:id', component:DetalheprodutoComponent},
  {path: 'produtos-delete/:id', component:ProdutosDeleteComponent},
  {path: 'usuario-edit/:id', component:UsuarioEditComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'trabalhe-conosco', component:TrabalheConoscoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
