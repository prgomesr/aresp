import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContasReceberService {

  url = 'http://localhost:3000/recebimentos';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any []>(this.url);
  }

  excluir(codigo: number) {
    return this.http.delete(`${this.url}/${codigo}`);
  }

}
