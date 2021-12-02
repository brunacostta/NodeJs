//Crie um arquivo adicione uma variável inteira com qualquer valor. Calcule o fatorial deste valor utilizando o for e imprima o resultado no terminal.

var numero = 5;
var fatorial = 1;

for (let index = numero; index > 0; index--) {
    fatorial*=index;
    console.log(index, fatorial);
}

console.log("Fatorial de ", numero, " é :", fatorial);