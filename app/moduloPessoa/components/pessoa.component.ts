// aqui sera feito acesso os valores do html que sera exibido na tela
import {Component, coreBootstrap, OnInit } from '@angular/core';
import {PessoaService} from '../model/pessoa.services';
import {Pessoa} from "./pessoa";

@Component({
	moduleId: module.id,
	selector: 'pessoa-component',
	templateUrl: 'pessoa.component.html',
	providers: [PessoaService]
})
export class PessoaComponent implements OnInit{
	// pessoas = this.pessoaService.pessoas;
	// valores: Array<Pessoa> = new Array<Pessoa>();

	private pessoas: Array<Pessoa>;
	public pessoaSel : Pessoa =  new Pessoa(1 , "Pessoa" , [] , "profissao da pessoa");;
	pessoaSelecionado: Pessoa =  new Pessoa(1 , "Pessoa" , [] , "profissao da pessoa");

	 constructor(private pessoaService : PessoaService){  }

	 pessoaSelecionada: Pessoa;

	 public teste;

	 ngOnInit() {
	 	this.listaPessoas();
	 }


	 listaPessoas() {
	 	this.pessoaService.listaPessoas()
	 	.subscribe(
	 		response => this.pessoas = response,
	 		error => console.log(error));
	 }

	 adicionarPessoa(pessoa: Pessoa){
	 	this.pessoaService
	 	.adicionarPessoa(pessoa).subscribe(
	 		pessoa => this.pessoas.push(pessoa),
	 		error => console.log(error))
	 }

	}