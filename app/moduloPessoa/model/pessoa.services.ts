import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Pessoa} from '../components/pessoa';
import {Observable} from 'rxjs/Observable';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class PessoaService{

	private headers = new Headers({'Content-Type': 'application/json'});

	private pessoaUrl = 'https://raw.githubusercontent.com/ronnyarruda20/repoJson/master/pessoa.json';

	private pessoaUrl1 = 'app/json/pessoas.json';

	private postUrl = 'http://echo.jsontest.com/id/1/nome/rafael/profissao/programador/';

	constructor(private http : Http){ }

	//retorna li
	listaPessoas(): Observable<Array<Pessoa>>{
		return this.http.get(this.pessoaUrl1)
		.map(response => response.json()).
		catch(this.handleError);
	}

	adicionarPessoa(pessoa: Pessoa): Observable<Pessoa>{

		let body = JSON.stringify({ pessoa });
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		let retorno = this.http.post(this.postUrl, body, options)
		.map(response => response.json())
		.catch(this.handleError);

		retorno.forEach(res => {
			console.log(res); 
		});
		return retorno;
	}

	getPessoa():Observable<Pessoa>{
		return this.http.get(this.postUrl)
		.map(response => response.json()).
		catch(this.handleError);
	}

	//metodo que trata e mostra o erro no console do navegador
	private handleError(error:Response){
		console.error(error.text());
		return Observable.throw(error.text());
	}

	//metodo para analizar a reposta do json "não funcionando corretamente"
	private extractData(res: Response) {
		let body = res.json();
		return body.data || { };
	}

}