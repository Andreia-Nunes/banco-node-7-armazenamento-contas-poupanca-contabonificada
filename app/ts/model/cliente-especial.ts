class ClienteEspecial extends Cliente{
    private _dependentes: Array<Cliente>;

    constructor(nome:string, cpf:string, conta:number) {
        super(nome, cpf, conta);
        this._dependentes = new Array<Cliente>();
    }

    inserirDependentes(dependente: Cliente):void{
        this._dependentes.push(dependente);
    }

    listarDependentes():Array<Cliente>{
        return this._dependentes;
    }

    removerDependente(cpf:string){
        let dependente = this._dependentes.find(dependente => dependente.cpf === cpf);
        let indice = this._dependentes.indexOf(dependente);

        this._dependentes.splice(indice, 1);
    }


}