import mongoose, {version} from "mongoose";

const userSchema = new mongoose.Schema({
    id: {type:mongoose.Schema.Types.ObjectId},
    nome_completo: {type:String, required: true},
    cpf: {type:String, required: true}, //unico
    email: {type:String, required: true}, //unico
    senha: {type:String, required: true}
}, {versionKey:false}) 

const user = mongoose.model("users", userSchema);

export {user, userSchema}