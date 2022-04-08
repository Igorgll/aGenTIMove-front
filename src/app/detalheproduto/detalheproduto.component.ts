import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produtos } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-detalheproduto',
  templateUrl: './detalheproduto.component.html',
  styleUrls: ['./detalheproduto.component.css']
})
export class DetalheprodutoComponent implements OnInit {

  produtos: Produtos = new Produtos()
  idProd:number


  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    // if(environment.token == ""){
    //   alert("Sua seção expirou, faça o login novamente.")
    //   this.router.navigate(["/login"])
    // }

    this.produtoService.refreshToken()
    this.idProd = this.route.snapshot.params['id']
    this.getProdById();

  }

  getProdById(){
    this.produtoService.getByIdProduto(this.idProd).subscribe((resp: Produtos) =>{
      this.produtos = resp

      // this.idCat = this.produto.categoria.id

    })
  }


  addProdutos(){
    // this.carrinho.adicionar(this.produto)
    // console.log(this.carrinho.produtos)
  }
}
