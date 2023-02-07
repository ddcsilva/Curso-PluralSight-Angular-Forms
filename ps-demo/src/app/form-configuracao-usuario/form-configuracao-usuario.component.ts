import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfiguracoesUsuario } from '../data/configuracoes-usuario';

@Component({
  selector: 'app-form-configuracao-usuario',
  templateUrl: './form-configuracao-usuario.component.html',
  styleUrls: ['./form-configuracao-usuario.component.css']
})
export class FormConfiguracaoUsuarioComponent implements OnInit {

  configuracoesUsuarioOriginal: ConfiguracoesUsuario = {
    nome: "",
    ofertaEmail: false,
    tema: "",
    tipoAssinatura: "",
    observacoes: ""
  };

  configuracoesUsuario: ConfiguracoesUsuario = { ...this.configuracoesUsuarioOriginal };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log("onSubmit: ", form.valid)
  }

}
