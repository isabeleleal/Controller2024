import {equipamentos} from "../models/Equipaments.js"
import {user} from "../models/User.js"
import { transacao } from "../models/Transacao.js";



class transacaoEquipamentos{

    static async reverterequipamentos(req,res){
        try{
            const id = req.params.id;
            const transacaoDb = await transacao.findOne({_id: id});

            const estoque = await equipamentos.findOne({_id:transacaoDb.equipamentos._id })
            
           
            
            const valorAtual = estoque.estoque
            const solicitacao = transacaoDb.quantidades
            const saldo = valorAtual + solicitacao
            console.log(saldo)

           
            
            await equipamentos.findOneAndUpdate({_id: transacaoDb.equipamentos._id}, {estoque:saldo})
            const novoSolicitacao = await transacao.deleteOne({ _id: id });
            console.log(novoSolicitacao)
            
            res.status(200).json({message: "Reversão de equipamentos feita com sucesso" });
            

        }catch(error){
            console.log("deu erro", error)
        }
    }

    static async retirarequipamentos(req,res){

        try{
            const id = req.params.id;
            const estoque = await equipamentos.findOne({_id: id});

            const usuario = await user.findOne({_id:req.body.usuario})
           
            
            const valorAtual = estoque.estoque
            const solicitacao = req.body.estoque
            const saldo = valorAtual - solicitacao

          
            
            
            if (saldo >=0){
           
             await equipamentos.findOneAndUpdate({_id: id}, {estoque:saldo})
             
           
                
            const novoSolicitacao = await transacao.create({
                quantidades: solicitacao,
                equipamentos: estoque,
                user: usuario,
                data: new Date()
                
            });
            console.log(novoSolicitacao)
            
            res.status(200).json({message: "Retirada de equipamentos feita com sucesso" });
            }else{
                res.status(400).json({message: "Não temos saldo em estoque" });
            }

        }catch(error){
            console.log("deu erro", error)
        }

      
      

        
    }
}

export default transacaoEquipamentos