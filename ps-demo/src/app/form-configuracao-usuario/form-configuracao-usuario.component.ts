import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ConfiguracoesUsuario } from '../data/configuracoes-usuario';
import { DadosService } from '../data/dados.service';

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

  constructor(private service: DadosService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log("onSubmit: ", form.valid)
    this.service.postFormularioConfiguracoesUsuario(this.configuracoesUsuario).subscribe (
      resultado => console.log("Sucesso: ", resultado),
      erro => console.log("Erro: ", erro)
    );
  }

  onBlur(campo: NgModel): void {
    console.log("onBlur: ", campo.valid)
  }

}
