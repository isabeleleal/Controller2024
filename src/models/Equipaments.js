import mongoose, {version} from "mongoose";

const equipamentosSchema = new mongoose.Schema({
    id: {type:mongoose.Schema.Types.ObjectId},
    nome_produto: {type:String, required: true},
    estoque: {type:Number, required: true}
}, {versionKey:false}) 

const equipamentos = mongoose.model("equipamentos", equipamentosSchema);

export {equipamentos, equipamentosSchema}