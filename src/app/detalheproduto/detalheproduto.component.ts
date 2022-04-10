import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produtos } from '../model/Produto';
import { AuthService } from '../service/auth.service';
import { ComprasService } from '../service/compras.service';
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
    public authservice: AuthService,
    public carrinho: ComprasService,
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

  equip(){
    let ok: boolean = false
    if(this.produtos.equipamentos == 'SIM'){
      ok = true
    }
    return ok
  }


  addProdutos(){
    this.carrinho.adicionarCompras(this.produtos)

    console.log(this.carrinho.produtos)
    console.log(this.carrinho.listaCompras) 
  }
}
