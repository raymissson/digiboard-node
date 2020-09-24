import { Request, Response } from 'express';
import knex from '../database/connection';

class FuncionariosController{
    async create(request: Request, response: Response){
        const {
            cpf,
            nome,
            cargo
        } = request.body;

        const funcionario = {
            foto: 'image-fake',
            cpf,
            nome,
            cargo
        };

        try {
            await knex('funcionarios').insert(funcionario);
            return response.json(funcionario);
        } catch (error) {
            return response.json({message: 'Funcionário já existe'});
        }
    
    }

    async index(request: Request, response: Response){
        const funcionarios = await knex('funcionarios').select('*');
    
        const serializedFunc = funcionarios.map(func =>{
            return {
                cpf: func.cpf,
                nome: func.nome,
                image_url: `http://localhost:3333/uploads/${func.foto}`,
                cargo: func.cargo
            };
        });
    
        return response.json(serializedFunc);
    }

    async show(request: Request, response: Response){
        const { cpf } = request.params;

        const funcionario = await knex('funcionarios').where('cpf', cpf).first();

        if(!funcionario){
            return response.status(400).json({ message: 'Funcionário não encontrado' });
        }

        return response.json(funcionario);
    }

    async delete(request: Request, response:Response){
        const { cpf } = request.params;

        await knex('funcionarios').where('cpf', cpf).del();

        return response.json({ success: 'Funcionário excluído' });
    }

    async update(request: Request, response: Response){
        const { cpf } = request.params;

        const {
            nome,
            cargo
        } = request.body;

        const funcionario = {
            foto: 'image-fake',
            nome,
            cargo
        };

        await knex('funcionarios').where('cpf', cpf).update(funcionario);

        return response.json({
            cpf,
            ...funcionario
        });
    }
}

export default FuncionariosController; 