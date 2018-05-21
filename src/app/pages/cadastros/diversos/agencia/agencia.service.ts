import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Agencia } from '../../../../core/model';
import { environment } from '../../../../../environments/environment';
import {HttpService} from '../../../../shared/http/http.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AgenciaService {
  agencia = new Agencia();
  constructor(private httpService: HttpService) { }

  salvar(agencia: Agencia): Observable<Response> {
    return this.httpService.post('Agencia', agencia);
  }

  editar(agencia: Agencia): Observable<Response> {
    return this.httpService.put('Agencia/' + agencia.id, agencia);
  }

  listar(): Observable<Response> {
    return this.httpService.get('Agencias');
  }

  listarPorCodigo(id: number): Observable<Response> {
    return this.httpService.get('Agencia/' + `${id}`);
  }

  excluir(codigo: number): Observable<Response> {
    return this.httpService.delete('Agencia/' + codigo);
  }

}
