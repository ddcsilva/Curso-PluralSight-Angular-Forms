import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConfiguracoesUsuario } from './configuracoes-usuario';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor() { }

  postFormularioConfiguracoesUsuario(configuracoesUsuario: ConfiguracoesUsuario) : Observable<ConfiguracoesUsuario> {
    return of(configuracoesUsuario);
  }
}
