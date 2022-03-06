
class Cliente{
    private _nome: string;
    private _cpf: string;
    private _conta: number;

    constructor(nome: string, cpf: string, conta: number ) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome:string){
        this._nome = nome;
    }

    get cpf():string{
        return this.cpf;
    }

    set cpf(cpf:string){
        this.cpf = cpf;
    }

    get conta():number{
        return this.conta;
    }

    set conta(conta:number){
        this._conta = conta;
    }

    toString():string{
        return `Nome: ${this._nome}, CPF: ${this._cpf}, Conta: ${this._conta}`;
    }
}