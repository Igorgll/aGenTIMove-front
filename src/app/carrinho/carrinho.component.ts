import { Component, OnInit } from '@angular/core';
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

  constructor(
    private auth: AuthService,
    private carrinho: ComprasService
  ) { }

  ngOnInit() {

    this.getUsuarioById()
  }

  getUsuarioById(){
    this.auth.getByIdUsuario(environment.id).subscribe((resp: Usuario)=>{
      this.usuario = resp
      console.log(this.usuario)
    })

  }

}
