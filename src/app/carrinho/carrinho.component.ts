import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { ComprasService } from '../service/compras.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  usuario: Usuario = new Usuario()

  listaCompras: any[]

  comprado = this.carrinho.listar()

  constructor(
    private auth: AuthService,
    private carrinho: ComprasService,
    private router: Router
  ) { }

  ngOnInit() {

    if(environment.token == ""){
      this.router.navigate(['/login'])
    }

    this.getUsuarioById()
  }

  getUsuarioById(){
    this.auth.getByIdUsuario(environment.id).subscribe((resp: Usuario)=>{
      this.usuario = resp
      this.listaCompras = this.usuario.compras
    })
  }

  total(){
    return this.comprado.map((item)=> item.valor).reduce((a,b)=> a+b,0)
  }
}
