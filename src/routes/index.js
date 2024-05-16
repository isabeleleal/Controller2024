import express from "express";
import usuarios from "./RoutesUser.js"
import equipamentos from "./RoutesEquip.js"
import retirada from "./transacao.js"

const routes = (app) => {
    app.route("/").get((req,res) => res.status(200).send("Desafio Controle de equipamentos"))
    app.use(express.json(), usuarios, equipamentos, retirada)
}

export default routes