import express from "express";
import transacao from "../controllers/transacaocontrollers.js"
/* import {body } from "express-validator"; */


const routes = express.Router();

routes.put("/transacao/retirada/:id", transacao.retirarequipamentos)
routes.post("/transacao/reverter/:id", transacao.reverterequipamentos)
/* routes.put("/equipamentos/:id",transacao.retirarequipamentos) */

export default routes 