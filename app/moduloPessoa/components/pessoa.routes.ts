import { RouterConfig } from '@angular/router';
import { PessoaComponent } from './pessoa.component';



export const PessoaRoutes: RouterConfig = [
	{ path: 'listar-pessoa', component: PessoaComponent },
	{ path: '', redirectTo: '/listar-Pessoa', terminal: true }
];