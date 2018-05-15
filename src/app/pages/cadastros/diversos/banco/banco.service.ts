import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Banco } from '../../../../core/model';
import {environment} from '../../../../../environments/environment';
import {HttpService} from '../../../../shared/http/http.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BancoService {


  constructor(private httpService: HttpService) { }

  listar (): Observable<Response> {
    return this.httpService.get('Bancos');
  }

  salvar(banco: Banco): Observable<Response> {
    return this.httpService.post('Banco', banco);
  }

  editar(banco: Banco, id: number): Observable<Response>{
    return this.httpService.put('bancos/' + id, banco);
  }

  listarPorCodigo(id: number): Observable<Response>{
    return this.httpService.get('Bancos/' + id);
  }

  excluir(codigo: number, id: number): Observable<Response>{
    return this.httpService.delete('bancos/' + id);
  }
}
