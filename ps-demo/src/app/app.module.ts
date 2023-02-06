import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormConfiguracaoUsuarioComponent } from './form-configuracao-usuario/form-configuracao-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    FormConfiguracaoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
