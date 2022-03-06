class Clientes{
    private _clientes: Array<Cliente>;

    constructor() {
        this._clientes = new Array<Cliente>();
    }

    inserir(cliente:Cliente):void{
        this._clientes.push(cliente);
    }

    remover(cpf:string):void{
        let cliente: Cliente;
        let indice:number;

        cliente = this.pesquisar(cpf);
        indice = this._clientes.indexOf(cliente);

        this._clientes.splice(indice, 1);
    }

    listar():Array<Cliente>{
        return this._clientes;
    }

    pesquisar(cpf:string):Cliente{
        let cliente: Cliente;

        cliente = this._clientes.find(cliente => cliente.cpf === cpf);

        return cliente;
    }
}