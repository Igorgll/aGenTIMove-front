import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produtos } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-cadprodutos',
  templateUrl: './cadprodutos.component.html',
  styleUrls: ['./cadprodutos.component.css']
})
export class CadprodutosComponent implements OnInit {

  produtos: Produtos = new Produtos();
  listaProdutos: Produtos[];
  categoria: string;
  equipamentos: string;

  constructor(
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    if(environment.token == ""){
      alert("Sua seção expirou, faça o login novamente.")
      this.router.navigate(["/login"])
    }

    this.produtoService.refreshToken()
  }

  categoriaProd(event: any){
    this.categoria = event.target.value
  }

  equipamentosProd(event: any){
    this.equipamentos = event.target.value
  }

  cadastrar(){
    this.produtos.categoria = this.categoria
    this.produtos.equipamentos = this.equipamentos

    this.produtoService.postProdutos(this.produtos).subscribe((resp: Produtos)=>{
      console.log(resp)
      this.produtos = resp 
      alert("Produto cadastrado com sucesso!")
  })
  }
}
