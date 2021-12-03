import { Cliente } from "./model/Cliente.js";
import ClienteRepository from "./repository/ClienteRepository.js";

//criar
const model = new Cliente();
model.nome = "Quero ver";
model.sobrenome = "Outra vez";

const repository = new ClienteRepository();

await repository.create(model);

//update
model.id = 1;
model.nome = "Agora vai";
model.sobrenome = "funcionaaaaa";

await repository.update(model);

//delete
await repository.delete(2);

const lista = await repository.read();
console.log(lista);