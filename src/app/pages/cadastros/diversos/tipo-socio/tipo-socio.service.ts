import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TipoSocioService {

  url = 'http://localhost:3000/tiposSocios';

  constructor(private http: HttpClient) { }

  listar () {
    return this.http.get<any []>(this.url);
  }

}
