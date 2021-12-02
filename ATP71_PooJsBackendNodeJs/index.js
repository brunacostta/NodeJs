//Crie um terceiro arquivo para realizar os testes. Instancie um objeto de cada classe, atribua valores e imprima os objetos no terminal.

import { Categoria } from './Categoria.js';
import { Produto } from './Produto.js';

const categoria = new Categoria();
categoria.nome = 'Alimento';
categoria.descrição = 'Proteina';
console.log(categoria);

const produto = new Produto();
produto.nomeProduto = 'merluza';
produto.tipoProduto = 'peixe';
console.log(produto);