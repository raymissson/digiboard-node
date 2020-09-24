import express from 'express';
import FuncionariosController from './controllers/FuncionariosController';

const routes = express.Router();

const funcionariosController = new FuncionariosController();

routes.get('/funcionarios', funcionariosController.index);
routes.post('/funcionarios', funcionariosController.create);
routes.get('/funcionarios/:cpf', funcionariosController.show);
routes.delete('/funcionarios/:cpf', funcionariosController.delete);
routes.put('/funcionarios/:cpf', funcionariosController.update);

export default routes;