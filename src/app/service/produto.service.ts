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

  getByIdProduto(id: number): Observable<Produtos> {
    return this.http.get<Produtos>(`https://agentimove.herokuapp.com/produtos/${id}`, this.token)
  }

  postProdutos(produtos: Produtos){
    return this.http.post<Produtos>('https://agentimove.herokuapp.com/produtos', produtos, this.token)
  }

  putProdutos(produtos: Produtos): Observable<Produtos> {
    return this.http.put<Produtos>('https://agentimove.herokuapp.com/produtos', produtos ,this.token)
  }

  deleteProdutos(id: number){
    return this.http.delete(`https://agentimove.herokuapp.com/produtos/${id}`, this.token)
  }
}
