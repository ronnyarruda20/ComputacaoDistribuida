import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule , JsonpModule}    from '@angular/http';
import { FormsModule, provideForms, disableDeprecatedForms } from '@angular/forms';

import { AppComponent }  from './app.component';
import {PessoaService} from './moduloPessoa/model/pessoa.services';
import {PessoaComponent} from './moduloPessoa/components/pessoa.component';


@NgModule({
  imports:      [ BrowserModule , 
  HttpModule, FormsModule, JsonpModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent]
   // providers: [
   //  disableDeprecatedForms(),
   //  provideForms()]
})
export class AppModule { }