import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CategoriasComponent } from '../categorias/categorias.component';
import { Produtos } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Produtos = new Produtos()
  listaProdutos: Produtos[]


  constructor(
    private router: Router,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    // if(environment.token == ''){
    //   alert('Sua seção expirou, faça o login novamente.')
    //   this.router.navigate(['/login'])
    // }
    this.produtoService.refreshToken()
    this.findAllProdutos()
  }

  findAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produtos[]) =>{
    this.listaProdutos = resp
    })
  }

}
