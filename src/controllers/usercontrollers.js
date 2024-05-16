import {user} from "../models/User.js"
import {validationResult } from "express-validator";



class CadastroUser {
    static async cadastrouser (req,res){
        const error = validationResult(req); 
        console.log(error)
        if (!error.isEmpty()){
            return res.status(400).json({error: error.array()})
        }
        const validacaoUserExistente = await user.find({email: req.body.email});
        if (validacaoUserExistente.length > 0 ){
            return res.status(400).json({error:"Usuário já existe "})
        }

        const validacaoCpfExistente = await user.find({cpf: req.body.cpf});
        if (validacaoCpfExistente.length > 0 ){
            return res.status(400).json({error:"Usuário já existe "})
        }

        try{
            const novoUser = await user.create(req.body);
            res.status(201).json({message: "Criado com sucesso", user:  novoUser});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha ao cadastrar usuário`})
        }
    }

    static async listaruser(req,res){
        try{

            const listarUser = await user.find({});
            res.status(200).json(listarUser)

        }catch(erro){
            res.status(500).json({message: `${erro.message} - Falha na requisição`})
        }
    }

    static async atualizarDadosUser(req,res){
        try{
            const id = req.params.id;
            await user.findByIdAndUpdate(id, req.body)
            res.status(200).json({message: "Usuário atualizado" });
        }catch(erro){
            res.status(500).json({messege: `${erro.message} - Falha ao atualizar usuário`})
        }
      }

      static async deletarUser(req,res) {
        try{
            const id = req.params.id;
            await user.findByIdAndDelete(id);
            res.status(200).json({messege:"Usuário foi removido com sucesso"});
        }catch(erro){
            res.status(500).json({messege: `${erro.message} - Falha ao remover Usuário`})
        }
      }
}

export default CadastroUser