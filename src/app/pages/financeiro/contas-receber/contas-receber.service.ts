import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ErrorHandlerService } from '../../../core/error-handler.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContasReceberService {

  url = 'http://localhost:3000/recebimentos';

  constructor(private http: HttpClient,
  private errorHandler: ErrorHandlerService) { }

  listar() {
    return this.http.get<any []>(this.url)
      .catch(err => this.errorHandler.handle(err));
  }

  excluir(codigo: number): Observable<{}> {
    return this.http.delete(`${this.url}/${codigo}`)
      .catch(err => this.errorHandler.handle(err));
  }

}
