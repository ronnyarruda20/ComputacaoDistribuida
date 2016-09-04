import { provideRouter, Routes } from '@angular/router'; 
import { PessoaRoutes } from './moduloPessoa/components/pessoa.routes';


const appRoutes: Routes = [
  	...PessoaRoutes
];

export const APP_ROUTER_PROVIDERS = [ provideRouter(appRoutes) ];