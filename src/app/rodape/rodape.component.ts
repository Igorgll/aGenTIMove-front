import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  usuario: Usuario = new Usuario()
  id = environment.id

  constructor(
    private authService : AuthService,
    // private route: ActivatedRoute
  ) { }

  ngOnInit(){

    this.authService.refreshToken()
 


  }

}
