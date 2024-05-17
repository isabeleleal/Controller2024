import mongoose, {version} from "mongoose";
import { userSchema } from "./User.js";
import { equipamentosSchema } from "./Equipaments.js";


const transacaoSchema = new mongoose.Schema({
    id: {type:mongoose.Schema.Types.ObjectId},
    user: userSchema,
    equipamentos: equipamentosSchema,
    quantidades: {type:Number},
    data:{type:Date}
}) 

const transacao = mongoose.model("transacao", transacaoSchema);

export {transacao, transacaoSchema}