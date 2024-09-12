// Importa il modulo app.ts
import app from "./app";

// Porta su cui l'app ascolterà le richieste
const PORT: number = parseInt(process.env.PORT || "3000");

// Avvia il server
app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});
