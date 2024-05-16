import {equipamentos} from "../models/Equipaments.js"
import {user} from "../models/User.js"



class transacaoEquipamentos{

    static async retirarequipamentos(req,res){

        try{
            const id = req.params.id;
            const estoque = await equipamentos.findOne({_id: id});
            res.json(estoque);
            
            const valorAtual = estoque.estoque
            const solicitacao = req.body.estoque
            const saldo = valorAtual - solicitacao
           
            if(valorAtual>0 ){
                console.log("funcionou")
                
            }
        
            if (saldo >=0){
                console.log("realizar retirada")
                
            }else{
                console.log("não temos a solicitação em estoque")
            }

        }catch(error){
            console.log("deu erro")
        }
      

        
    }
}

export default transacaoEquipamentos