import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../../environments/environment';

@Injectable()
export class CategoriaPagamentoService {

  constructor(private http: HttpClient) { }

  listar () {
    return this.http.get<any []>(environment.apiUrl + 'categoriasPagamentos');
  }

}
