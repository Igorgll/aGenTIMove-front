import { Component, OnInit } from '@angular/core';
import { CategoriasComponent } from '../categorias/categorias.component';
import { Produtos } from '../model/Produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Produtos = new Produtos()
  listaProdutos: Produtos[]

  

  constructor() { }

  ngOnInit() {
  }

  cadastrar(){
  }

}
