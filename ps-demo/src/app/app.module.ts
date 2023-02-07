import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FormConfiguracaoUsuarioComponent } from './form-configuracao-usuario/form-configuracao-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    FormConfiguracaoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
