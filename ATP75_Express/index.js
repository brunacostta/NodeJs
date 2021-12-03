import Express from 'express';
import bodyParser from 'body-parser';
import ClienteRepository from "./repository/ClienteRepository.js";
import ClienteApi from './api/ClienteApi.js';

const respository = new ClienteRepository();

const api = Express();
api.use(bodyParser.json());
api.listen(3000, ()=>console.log('Rodando....'));
api.use('/api/cliente', ClienteApi);

