class ClienteController{
    private nome:HTMLInputElement;
    private cpf: HTMLInputElement;
    private conta: HTMLInputElement;

    private clientes: Clientes;

    constructor() {
        this.nome = document.querySelector("#nome");
        this.cpf = document.querySelector("#cpf");
        this.conta = document.querySelector("#conta");

        this.clientes = new Clientes();
    }

    inserir(evento:Event){
        evento.preventDefault();

        let novoCliente:Cliente = new Cliente(this.nome.value, this.cpf.value, Number(this.conta.value));

        this.clientes.inserir(novoCliente);
        this.inserirClientenoHTML(novoCliente);

    }

    inserirClientenoHTML(cliente:Cliente):void{
        let elementoP:Element = document.createElement("p");
        elementoP.innerHTML = cliente.toString();

        let divClientes:Element = document.querySelector("#clientes");
        divClientes.appendChild(elementoP);
    }
}