let cognome = "Violatto";
cognome.toLowerCase();
let nome = "Alex";
nome.toLowerCase();
let sesso = "M";
let data_nascita = "14/09/2003";
let codice = [];
let vocale = [];
let consonante = [];

for (let i = 0; i < cognome.length; i++) {
  if (
    cognome[i] === "a" ||
    cognome[i] === "e" ||
    cognome[i] === "i" ||
    cognome[i] === "o" ||
    cognome[i] === "u"
  ) {
    vocale.push(cognome[i]);
  } else {
    consonante.push(cognome[i]);
  }
  if (consonante.length === 3) {
    break;
  }
  /*if (consonante.length === 2){
      consonante.push("x");
  }*/
}
codice.push(consonante[0]);
codice.push(consonante[1]);
codice.push(consonante[2]);
consonante = [];
vocale = [];
for (let i = 0; i < nome.length; i++) {
  if (
    nome[i] === "a" ||
    nome[i] === "e" ||
    nome[i] === "i" ||
    nome[i] === "o" ||
    nome[i] === "u"
  ) {
    vocale.push(nome[i]);
  } else {
    consonante.push(nome[i]);
  }
  if (consonante.length === 3) {
    break;
  }
  /*if (consonante.length === 2){
      consonante.push("x");
    }*/
}
codice.push(consonante[0]);
codice.push(consonante[1]);
codice.push(consonante[2]);
console.log(codice);

function aggiungi(array, valore) {
  array.push(valore);
}
