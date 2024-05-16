import mongoose, {version} from "mongoose";
import { equipamentos } from "./Equipaments";
import { user } from "./User";

const transacaoSchema = new mongoose.Schema({
    id: {type:mongoose.Schema.Types.ObjectId},
    _id_user: {user},
   _id_equipamentos: {equipamentos},
   quantidades: {type:String}
}) 

const transacao = mongoose.model("transacao", transacaoSchema);

export {transacao, transacaoSchema}