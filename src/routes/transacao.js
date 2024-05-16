import express from "express";
import transacao from "../controllers/transacao.js"
/* import {body } from "express-validator"; */


const routes = express.Router();

routes.put("/retirada/:id", transacao.retirarequipamentos)
/* routes.put("/equipamentos/:id",transacao.retirarequipamentos) */

export default routes 