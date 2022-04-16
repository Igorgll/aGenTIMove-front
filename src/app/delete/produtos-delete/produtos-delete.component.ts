import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from 'src/app/model/Produto';
import { AlertasService } from 'src/app/service/alertas.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produtos-delete',
  templateUrl: './produtos-delete.component.html',
  styleUrls: ['./produtos-delete.component.css']
})
export class ProdutosDeleteComponent implements OnInit {

  produtos: Produtos = new Produtos()
  idProduto: number

  constructor(
    private produtoService : ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private alertas: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    if (environment.token == ''){
      this.router.navigate(['/login'])
      this.alertas.showAlertWarning('Sua Sessão expirou! Faça login Novamente')
    }
    this.idProduto = this.route.snapshot.params['id']
    this.findByIdProduto(this.idProduto)
  }


  findByIdProduto(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produtos)=>{
      this.produtos = resp
    })
  }
  apagar(){
    this.produtoService.deleteProdutos(this.idProduto).subscribe(()=>{
      this.alertas.showAlertSuccess('Produto deletado com sucesso')
      this.router.navigate(['/administrador'])
    })
  }
}
