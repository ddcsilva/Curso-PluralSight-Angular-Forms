import { Component, OnInit } from '@angular/core';
import { ConfiguracoesUsuario } from '../data/configuracoes-usuario';

@Component({
  selector: 'app-form-configuracao-usuario',
  templateUrl: './form-configuracao-usuario.component.html',
  styleUrls: ['./form-configuracao-usuario.component.css']
})
export class FormConfiguracaoUsuarioComponent implements OnInit {

  configuracoesUsuarioOriginal: ConfiguracoesUsuario = {
    nome: "Danilo",
    ofertaEmail: true,
    tema: "escuro",
    tipoAssinatura: "Anual",
    observacoes: "Algumas observações..."
  };

  configuracoesUsuario: ConfiguracoesUsuario = { ...this.configuracoesUsuarioOriginal };

  constructor() { }

  ngOnInit(): void {
  }

}
