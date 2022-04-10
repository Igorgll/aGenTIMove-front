import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CategoriasComponent } from '../categorias/categorias.component';
import { Produtos } from '../model/Produto';
import { ComprasService } from '../service/compras.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Produtos = new Produtos()
  listaProdutos: Produtos[]
  categoria: string;

  key = ''
  reverse = true


  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    public carrinho: ComprasService
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

  addProdutos(){
    this.carrinho.adicionarCompras(this.produtos)
    console.log(this.carrinho.produtos)
  }

  categoriaProd(event: any){
    this.key = event.target.value
  }
}



