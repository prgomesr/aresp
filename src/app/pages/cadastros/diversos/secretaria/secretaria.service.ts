import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SecretariaService {

  url = 'http://localhost:3000/secretarias';

  constructor(private http: HttpClient) { }

  listar () {
    return this.http.get<any []>(this.url);
  }

}
