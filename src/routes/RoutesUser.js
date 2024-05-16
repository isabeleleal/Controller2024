import express from "express";
import userControllers from "../controllers/usercontrollers.js"

import {body } from "express-validator";


const routes = express.Router();

routes.get("/usuario",userControllers.listaruser );
routes.get("/usuario/:id", userControllers.listaruser)
routes.post("/usuario", [
    body("email").isEmail().withMessage("Adicione um e-mail válido"),
    body("cpf").isString().isLength({min:11, max:11}).withMessage("O cpf possui 11 digitos") 
   ],
    userControllers.cadastrouser)
routes.put("/usuario/:id", userControllers.atualizarDadosUser)
routes.delete("/usuario/:id", userControllers.deletarUser)

export default routes










