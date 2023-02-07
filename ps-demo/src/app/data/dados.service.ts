import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConfiguracoesUsuario } from './configuracoes-usuario';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor(private http: HttpClient) { }

  postFormularioConfiguracoesUsuario(configuracoesUsuario: ConfiguracoesUsuario) : Observable<any> {
    return this.http.post("url", configuracoesUsuario)
    
    // return of(configuracoesUsuario);
  }
}
