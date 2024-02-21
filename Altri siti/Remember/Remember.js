"use strict";

function log(frase) {
  console.log(frase);
}
function clear() {
  console.clear();
}

//Variabili (01)
const ESEMPIOVARIABILE = "Questo è un esempio";
let camelCase;

//Tipi di dato piu usati (02)
let variabileNumerica = 10;
let variabileStringa = "Ciao";
let variabileBooleana = true;

//Conversione dei dati Automatica (06)
let conversioneVerifica1 = "Io ho " + 20 + " anni"; //String - String - String
let conversioneVerifica2 = 20 - "10"; // 10 in numero [Uguale per (* e /)]
//log(conversioneVerifica2);

//Conversione dei dati Manuale (06)
let conversioneVerifica3 = "20";
Number(conversioneVerifica3);
let conversioneVerifica4 = 10;
String(conversioneVerifica4);
//log(conversioneVerifica4)

//If/else
const password = "1234";
if (password === "1234") {
  log("Puoi entrare");
} else if (password === "1234ospite") {
  log("Puoi entrare solo sull'account ospite");
} else {
  log("Non puoi entrare");
}
console.clear();

// //Switch
// const nome = "Alex";
// switch (nome) {
//     case "Alex": log("Ciao Alex!"); break;
//     case "Marco": log("Ciao Marco!"); break;
//     default: log("Non so come ti chiami!"); break;
// }
console.clear();

//Funzioni
//Funzioni dichiarate
function somma(N1, N2) {
  return N1 + N2;
}
log(somma(10, 10));
console.clear();

//Funzioni assegnate a variabili
const sottrazione = function (N1, N2) {
  return N1 - N2;
};
log(sottrazione(10, 5));
console.clear();

//Arrow function
const moltiplicazione = (N1, N2) => log(N1 * N2);
moltiplicazione(10, 10);
console.clear();

//Array
const accessoriTech = ["Telefono", "Laptop", "Tablet", "Cuffie bluetoot"];
const numeroLotteria = new Array();

//Metodi array
accessoriTech.unshift("Hard disk"); //Aggiunge un elemento all'inizio [primo elemento]
accessoriTech.push("Playstation 5"); //Aggiunge un elemento alla fine [ultimo elemento]
accessoriTech.shift(); //Rimuove il primo elemento [primo elemento]
accessoriTech.pop(); //Rimuove l'ultimo elemento [ultimo elemento]
accessoriTech.indexOf("Laptop"); //Restituisce la posizione nell'array dell'elemento, -1 se non lo trova
accessoriTech.includes("Laptop"); //Restituisce true se trova l'elemento nell'array, false se non lo trova

log(numeroLotteria);
console.clear();

//Oggetti
const Alex = {
  nome: "Alex",
  cognome: "Violatto",
  annoNascita: 2003,
  patente: true,

  calcolaEta: function () {
    this.eta = 2023 - this.annoNascita;
    return this.eta;
  },
};
Alex.calcolaEta();
log(Alex);
clear();

//Ciclo for
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  } //Salta questa ripetizione se i è uguale a 3
  if (i === 7) {
    break;
  } //Interrompi completamente il ciclo se i è uguale a 7
  log(i);
}
clear();

//Ciclo While
let numerone = 0;
while (numerone >= 0 && numerone <= 10) {
  log(numerone);
  numerone++;
}
clear();
//Do while
do {
  log(numerone);
  numerone--;
} while (numerone >= 0);
console.clear();
