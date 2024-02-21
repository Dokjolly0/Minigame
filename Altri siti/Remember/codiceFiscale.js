"use strict";

const userNome = "Alex";
const nome = userNome.toLowerCase();
let consonantiNome = "",
  vocaliNome = "";

const userCogome = "Violatto";
const cognome = userCogome.toLowerCase();
let consonantiCognome = "",
  vocaliCognome = "";

const sesso = "M";
let anno = "";
let mese = "";
let letteraMese = "";
let giorno = "";
const dataNascita = "14/09/2003";

let codiceFiscale = "";

for (let i = 0; i < nome.length; i++) {
  if (
    nome[i] === "a" ||
    nome[i] === "e" ||
    nome[i] === "i" ||
    nome[i] === "o" ||
    nome[i] === "u"
  ) {
    vocaliNome += nome[i];
  } else {
    consonantiNome += nome[i];
  }
  if (consonantiNome.length >= 3) {
    break;
  }
}
if (consonantiNome.length < 3) {
  for (let i = 0; i < 3; i++) {
    if (consonantiNome.length < 3 && vocaliNome.length >= 1) {
      if (vocaliNome[i] === undefined) {
        consonantiNome += "x";
      } else {
        consonantiNome += vocaliNome[i];
      }
      if (consonantiNome.length >= 3) {
        break;
      }
    }
  }
}

for (let i = 0; i < cognome.length; i++) {
  if (
    cognome[i] === "a" ||
    cognome[i] === "e" ||
    cognome[i] === "i" ||
    cognome[i] === "o" ||
    cognome[i] === "u"
  ) {
    vocaliCognome += cognome[i];
  } else {
    consonantiCognome += cognome[i];
  }
  if (consonantiCognome.length >= 3) {
    break;
  }
}
if (consonantiCognome.length < 3) {
  for (let i = 0; i < 3; i++) {
    if (consonantiCognome.length < 3 && vocaliCognome.length >= 1) {
      if (vocaliCognome[i] === undefined) {
        consonantiCognome += "x";
      } else {
        consonantiCognome += vocaliCognome[i];
      }
      if (consonantiCognome.length >= 3) {
        break;
      }
    }
  }
}
codiceFiscale += consonantiCognome;
codiceFiscale += consonantiNome;

//(A = Gennaio, B, C, D, E, H, L, M, P, R, S, T = Dicembre)
anno += dataNascita[8];
anno += dataNascita[9];
codiceFiscale += anno;

mese += dataNascita[3];
mese += dataNascita[4];

switch (mese) {
  case "01":
    letteraMese = "a";
    break;
  case "02":
    letteraMese = "b";
    break;
  case "03":
    letteraMese = "c";
    break;
  case "04":
    letteraMese = "d";
    break;
  case "05":
    letteraMese = "e";
    break;
  case "06":
    letteraMese = "h";
    break;
  case "07":
    letteraMese = "l";
    break;
  case "08":
    letteraMese = "m";
    break;
  case "09":
    letteraMese = "p";
    break;
  case "10":
    letteraMese = "r";
    break;
  case "11":
    letteraMese = "s";
    break;
  case "12":
    letteraMese = "t";
    break;
}
codiceFiscale += letteraMese;

giorno += dataNascita[0];
giorno += dataNascita[1];
giorno = Number(giorno);
if (sesso === "M") {
  giorno = giorno;
} else if (giorno === "F") {
  giorno = giorno + 40;
}
codiceFiscale += giorno;

codiceFiscale = codiceFiscale.toUpperCase();
console.log(codiceFiscale);
