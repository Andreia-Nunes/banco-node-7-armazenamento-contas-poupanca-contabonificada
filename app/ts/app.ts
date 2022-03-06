let contaController = new ContaController();
let clienteController = new ClienteController();
let clientes = new Clientes();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

const cli1 = new Cliente("Andréia Nunes", "000.11.222-33", 2);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

clientes.inserir(cli1);
clientes.listar().forEach(cliente => console.log(cliente.toString()));
clientes.pesquisar("000.111.222-33");
clientes.remover("000.111.222-33");
clientes.listar().forEach(cliente => console.log(cliente.toString()));
