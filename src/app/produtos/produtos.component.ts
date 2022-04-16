import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Compras } from '../model/Compras';
import { Produtos } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
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

  compra: Compras = new Compras()
  usuario: Usuario = new Usuario()
  idUser = environment.id
  idProd:number

  key = 'ALL'
  reverse = true


  constructor(
    private produtoService: ProdutoService,
    public carrinho: ComprasService,
    public authservice: AuthService,
    public alertas: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    // if(environment.token == ''){
    //   alert('Sua seção expirou, faça o login novamente.')
    //   this.router.navigate(['/login'])
    // }
    this.produtoService.refreshToken()
    this.findAllProdutos()
    this.getUserById()
  }

  findAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produtos[]) =>{
    this.listaProdutos = resp
    })
  }

  categoriaProd(event: any){
    this.key = event.target.value
  }

  getProdById(id:number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produtos) =>{
      this.produtos = resp

      this.compra.usuario = this.usuario
      this.compra.produto = this.produtos


      this.carrinho.postCompras(this.compra).subscribe((resp: Compras) => {
        this.compra = resp;
        this.alertas.showAlertSuccess('Produto adicionado ao carrinho com sucesso')
        this.compra = new Compras
    })
  })
}


  getUserById(){
    this.authservice.getByIdUsuario(this.idUser).subscribe((resp: Usuario) => {
      this.usuario = resp
      console.log(this.usuario)
    })
  }

  // addProdutos(id:number){

  //   this.compra.usuario = this.usuario

  //   this.compra.produto = this.produtos

  //   console.log(this.compra)

  //   this.carrinho.postCompras(this.compra).subscribe((resp: Compras) => {
  //     this.compra = resp;
  //     alert('Produto adicionado ao carrinho com sucesso')
  //     this.compra = new Compras
  //   })
  // }


}



