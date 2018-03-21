import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from '../../../../environments/environment';

@Injectable()
export class ContasReceberService {

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any []>(environment.apiUrl + 'recebimentos');
  }

  excluir(codigo: number) {
    return this.http.delete(`${environment.apiUrl + 'recebimentos'}/${codigo}`);
  }

}
