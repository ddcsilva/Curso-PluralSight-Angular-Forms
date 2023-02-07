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
    return this.http.post("https://putsreq.com/Tzanc8NLL4I9vdD9UXhH", configuracoesUsuario)
    
    // return of(configuracoesUsuario);
  }
}
