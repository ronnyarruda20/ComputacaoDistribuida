export class Telefone{
	id:number;
	pessoaId:number;
	numero:string; 

	constructor(id:number, 
		pessoaId:number,	
		numero:string) {
		this.id = id;
		this.pessoaId = pessoaId;
		this.numero = numero; 
	}
}