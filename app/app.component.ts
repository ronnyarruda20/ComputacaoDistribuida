import { Component } from '@angular/core';

import {PessoaComponent} from './moduloPessoa/components/pessoa.component';


@Component({
	selector: 'my-app',
	template:   
	`
	<pessoa-component></pessoa-component>
	` ,
	directives: [PessoaComponent]
})
export class AppComponent {}