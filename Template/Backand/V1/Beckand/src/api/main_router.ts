// Node module
import { Router } from "express";

// Importa i router specifici
import placeHolder from "./Placeholder/placeholder.router";

// Crea un'istanza del router
const mainRouter: Router = Router();

// Route principale
mainRouter.get("/", (req, res, next) => {
  res.send("API in esecuzione");
});

// Definisci le route secondarie
mainRouter.use("/cart-items", placeHolder);

// Esporta il router principale
export default mainRouter;
