import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produtos } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllProdutos(): Observable<Produtos[]>{
    return this.http.get<Produtos[]>('https://agentimove.herokuapp.com/produtos/todos', this.token)
  }

  postProdutos(produtos: Produtos){
    return this.http.post<Produtos>('https://agentimove.herokuapp.com/produtos', produtos, this.token)
  }

}
