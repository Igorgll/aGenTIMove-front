import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Compras } from 'src/app/model/Compras';
import { Produtos } from 'src/app/model/Produto';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { ComprasService } from 'src/app/service/compras.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-compras-delete',
  templateUrl: './compras-delete.component.html',
  styleUrls: ['./compras-delete.component.css']
})
export class ComprasDeleteComponent implements OnInit {

  usuario: Usuario = new Usuario()
  produtos: Produtos = new Produtos()
  compras: Compras = new Compras()
  idCompra: number

  constructor(
    private auth: AuthService,
    private carrinho: ComprasService,
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if(environment.token == ""){
      this.router.navigate(['/login'])
    }

    this.idCompra = this.route.snapshot.params['id']
    this.findByIdCompra(this.idCompra)
  }


  findByIdCompra(id: number){
    this.carrinho.getCompras(id).subscribe((resp: Compras)=>{
      this.compras = resp
    })
  }

  apagar(){
    this.carrinho.deleteCompras(this.idCompra).subscribe(()=>{
      alert('Produto deletado do carrinho com sucesso')
      this.router.navigate(['/carrinho'])
    })
  }
}
