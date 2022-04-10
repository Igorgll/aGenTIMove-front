import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuario: Usuario = new Usuario()

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.refreshToken()
  }

}
