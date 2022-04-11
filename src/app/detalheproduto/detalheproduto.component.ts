import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Compras } from '../model/Compras';
import { Produtos } from '../model/Produto';
import { Usuario } from '../model/Usuario';
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

  compra: Compras = new Compras()

  usuario: Usuario = new Usuario()
  idUser = environment.id


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
    this.getUserById()

  }

  getProdById(){
    this.produtoService.getByIdProduto(this.idProd).subscribe((resp: Produtos) =>{
      this.produtos = resp

      // this.idCat = this.produto.categoria.id

    })
  }

  getUserById(){
    this.authservice.getByIdUsuario(this.idUser).subscribe((resp: Usuario) => {
      this.usuario = resp
      console.log(this.usuario)
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
    this.compra.usuario = this.usuario

    this.compra.produto = this.produtos

    console.log(this.compra)
    this.carrinho.postCompras(this.compra).subscribe((resp: Compras) => {
      this.compra = resp;
      alert('Produto adicionado ao carrinho com sucesso')
      this.compra = new Compras
    })
  }
}
