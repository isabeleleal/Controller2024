import express from "express";
import equipControllers from "../controllers/equipcontrollers.js"

/* import {body } from "express-validator"; */


const routes = express.Router();

routes.get("/equipamentos",equipControllers.listarestoque );


routes.post("/equipamentos",equipControllers.cadastroequipamentos)
routes.put("/equipamentos/:id", equipControllers.atualizarestoque)


/* routes.delete("equipamentos/:id", equipControllers.deletarequipamentos) */

export default routes 