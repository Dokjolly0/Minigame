// Node module
import express, { Express } from "express";

// Importa il router
import router from "./api/main_router";

// Crea un'istanza dell'app Express
const app: Express = express();

// Configura il middleware per gestire i dati JSON
// Si occupa di parsare i dati JSON in arrivi POST
app.use(express.json());

// Configura il middleware per gestire i dati di tipo 'urlencoded'
// Si occupa di parsare i dati di tipo 'urlencoded' in arrivi POST da form HTML
app.use(express.urlencoded({ extended: false }));

// Usa il router per le route dell'applicazione
app.use(router);

// Esporta l'istanza di Express
export default app;
