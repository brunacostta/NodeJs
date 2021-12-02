//Crie um arquivo js e nele Crie duas classes, uma classe de para Pessoa e outra para Cliente. Crie um objeto de cada classe e imprima seus valores.

class Pessoa{
    nome;
    sobrenome;
}

class Cliente{
    tipoCliente;
}

const pessoa = new Pessoa();
pessoa.nome = "Bruna";
pessoa.sobrenome = "Costa";

const cliente = new Cliente();
cliente.tipoCliente = "Pessoa Fisica"

console.log(pessoa, cliente);