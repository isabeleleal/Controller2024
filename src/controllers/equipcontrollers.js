import {equipamentos} from "../models/Equipaments.js"


class CadastroEquipamentos {

    static async cadastroequipamentos(req,res){

        try{
            const novoEquipamento = await equipamentos.create(req.body);
            res.status(201).json({message: "Criado com sucesso", equipamentos:  novoEquipamento});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha ao cadastrar equipamento`})
        }
    }

    static async listarestoque(req,res){
        try {
            // Consultar o banco de dados para obter todos os itens de estoque
            const estoque = await equipamentos.find();
            res.json(estoque); // Responder com os dados do estoque em formato JSON

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    

    static async atualizarestoque(req,res){
        try {
            const id = req.params.id;
            await equipamentos.findByIdAndUpdate(id, req.body)
            res.status(200).json({message: "Equipamento atualizado" });
        }catch(erro){
            res.status(500).json({messege: `${erro.message} - Erro ao atualizar o estoque`})
        }
    }

}
export default CadastroEquipamentos


