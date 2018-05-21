import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../../environments/environment';
import { CategoriaPagamento } from '../../../../core/model';
import {HttpService} from '../../../../shared/http/http.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CategoriaPagamentoService {

  constructor(private httpService: HttpService) { }

  listar (): Observable<Response> {
    return this.httpService.get('CategoriasPagamento');
  }

  salvar(categoria: CategoriaPagamento): Observable<Response> {
    return this.httpService.post('CategoriaPagamento', categoria);
  }

  editar(categoria: CategoriaPagamento): Observable<Response> {
    return this.httpService.put('CategoriaPagamento/' + categoria.id, categoria);
  }

  listarPorCodigo(id: number): Observable<Response> {
    return this.httpService.get('CategoriaPagamento/' + `${id}`);
  }

  excluir(codigo: number): Observable<Response> {
    return this.httpService.delete('CategoriaPagamento/' + codigo);
  }

}
