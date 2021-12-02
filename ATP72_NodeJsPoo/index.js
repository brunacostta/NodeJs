import { PessoaFisica } from './PessoaFisica.js';
import { PessoaJuridica } from './PessoaJuridica.js';

const pf = new PessoaFisica();
pf.nome = 'Bruna';
pf.cpf = 123654789;
pf.endereco = 'Rafael da Rocha';

console.log(pf.nome, pf.cpf, pf.endereco);

const pj = new PessoaJuridica();
pj.nome = 'Faip';
pj.cnpj = 147852369784512;
pj.endereco = 'Paulo Orozimbro';

console.log(pj.nome, pj.cnpj, pj.endereco);