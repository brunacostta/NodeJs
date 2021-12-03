import { Router } from "express";
import { Cliente } from "./../model/Cliente.js";
import ClienteRepository from "./../repository/ClienteRepository.js";

const ClienteApi = Router();

const respository = new ClienteRepository();

ClienteApi.get('/', async (req, resp)=>{
    const lista = await respository.read();
    resp.send(lista);
});

ClienteApi.post('/', async (req, resp)=>{
    let {nome, sobrenome} = req.body;
    const cliente = new Cliente(nome, sobrenome);
    const retorno = await respository.create(cliente);
    resp.send(retorno);
});

ClienteApi.put('/:id', async (req, resp)=>{
    let id = req.params.id;
    let {nome, sobrenome} = req.body;
    const cliente = new Cliente(nome, sobrenome, id);
    const retorno = await respository.update(cliente);
    resp.send(retorno);
});

ClienteApi.delete('/:id', async (req, resp)=>{
    const retorno = await respository.delete(req.params.id);
    resp.send(JSON.stringify (retorno));
});

export default ClienteApi;