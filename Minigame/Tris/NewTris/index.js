const quadrato = [];
for (let i = 1; i <= 9; i++) {
  quadrato.push(document.getElementById(`quadrato${i}`));
}
const rivincita = document.querySelector("#rivincita");
let numero = 0;
let scelta = "x";
let vincita = false;
let callbackFunction;

let callbacks = [];
for (let i = 0; i < 9; i++) {
  //Dichiari una let che assegnerai alla funzione
  callbackFunction = logica(i);
  // Aggiungi la funzione all'array
  callbacks.push(callbackFunction);
  // Aggiungi i listener degli eventi
  quadrato[i].addEventListener("click", callbackFunction);
}
rivincita.addEventListener("click", funzioneRivincita);
function logica(i) {
  return () => {
    if (vincita) {
      return;
    }
    if (
      !quadrato[i].classList.contains("x") ||
      !quadrato[i].classList.contains("o")
    ) {
      if (scelta === "x") {
        if (
          quadrato[i].classList.contains("x") ||
          quadrato[i].classList.contains("o")
        ) {
          return;
        } else {
          quadrato[i].classList.add("x");
          aggiunta(i);
          vincitore(scelta);
          scelta = "o";
        }
      } else if (scelta === "o") {
        if (
          quadrato[i].classList.contains("x") ||
          quadrato[i].classList.contains("o")
        ) {
          return;
        } else {
          quadrato[i].classList.add("o");
          aggiunta(i);
          vincitore(scelta);
          scelta = "x";
        }
      }
    }
  };
}

const tabella = [
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
];
function aggiunta(i) {
  if (scelta === "x") {
    tabella[i] = "x";
  } else if (scelta === "o") {
    tabella[i] = "o";
  }
}
function vincitore(player) {
  console.log(player);
  console.log(tabella);
  for (let comb of mosseVincentiX) {
    if (
      tabella[comb[0] - 1] === player &&
      tabella[comb[1] - 1] === player &&
      tabella[comb[2] - 1] === player
    ) {
      alert(`${player} won`);
      vincita = true;
      return true;
    }
  }
  vincita = false;
  return false;
}
function funzioneRivincita() {
  for (let i = 0; i < 9; i++) {
    quadrato[i].classList.remove("x");
    quadrato[i].classList.remove("0");
    vincita = false;
  }
}

const mosseVincentiX = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
