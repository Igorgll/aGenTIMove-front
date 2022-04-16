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
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  usuario: Usuario = new Usuario()
  produtos: Produtos = new Produtos()
  compras: Compras = new Compras()
  idProduto: number

  listaCompras: any[]
  stotal: number[]

  // comprado = this.carrinho.listar()

  constructor(
    private auth: AuthService,
    private carrinho: ComprasService,
    private produtoService: ProdutoService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if(environment.token == ""){
      this.router.navigate(['/login'])
    }

    this.getUsuarioById()
  }

  getUsuarioById(){
    this.auth.getByIdUsuario(environment.id).subscribe((resp: Usuario)=>{
      this.usuario = resp
      this.listaCompras = this.usuario.compras
      console.log(this.listaCompras)
    })
  }

  findByIdProduto(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produtos)=>{
      this.produtos = resp
    })
  }

  apagar(){
    this.carrinho.deleteCompras(this.idProduto).subscribe(()=>{
      this.alertas.showAlertSuccess('Produto deletado do carrinho com sucesso')
      this.router.navigate(['/carrinho'])
    })
  }

  somaTotalCarrinho(){
    let valorTotal = 0;
    for(let item = 0; item< this.usuario.compras.length; item++){
      valorTotal = this.usuario.compras[item].produto.valor + valorTotal;
    }
    return valorTotal
  }

  finalizarCompra(){
    this.alertas.showAlertSuccess('Compra finalizada! Aguardando processamento do pagamento.')
  }
  
  // return this.stotal
    // if(stotal == '') return 0;
    // var total

    // return this.stotal.reduce(this.compras.produto.valor);
}
