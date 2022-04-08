import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Compras } from '../model/Compras';

@Injectable({
  providedIn: 'root'
})

export class ComprasService {



  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token),
  };

  refreshToken(){
    this.token={
      headers: new HttpHeaders().set("Authorization", environment.token),
    };
}

  getCompras(id: number): Observable<Compras>{
    return this.http.get<Compras>(`https://agentimove.herokuapp.com/compras/${id}`, this.token)
  }

  postCompras(compras: Compras): Observable<Compras>{
    return this.http.post<Compras>("https://agentimove.herokuapp.com/compras", compras ,this.token)
  }

  putCompras(compras: Compras): Observable<Compras>{
    return this.http.put<Compras>("https://agentimove.herokuapp.com/compras", compras ,this.token)
  }

  deleteCompras(id: number): Observable<Compras>{
    return this.http.delete<Compras>(`https://agentimove.herokuapp.com/compras/${id}`, this.token)
  }
}
