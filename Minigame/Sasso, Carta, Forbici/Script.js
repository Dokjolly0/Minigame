//document.getElementById("rematchButton").classList.add("Show");
const Rematch = document.getElementById("rematchButton");
//Rematch.classList.add("Show");
let id = 0;
let mioId = 0;
let idReset = 0;
//Rematch.classList.add("Show");

const Psasso = document.getElementById("playerSasso");
const Pcarta = document.getElementById("playerCarta");
const Pforbice = document.getElementById("playerForbici");
const Bsasso = document.getElementById("cpuSasso");
const Bcarta = document.getElementById("cpuCarta");
const Bforbice = document.getElementById("cpuForbici");

const funzioneCpu = function () {
  const mossaCpu = Math.floor(Math.random() * 3) + 1;
  if (mossaCpu === 1) {
    //Sasso cpu
    Bcarta.classList.add("Hidden");
    Bforbice.classList.add("Hidden");
    id = 1;
  } else if (mossaCpu === 2) {
    //Carta cpu
    Bsasso.classList.add("Hidden");
    Bforbice.classList.add("Hidden");
    id = 2;
  } else if (mossaCpu === 3) {
    //Forbice
    Bsasso.classList.add("Hidden");
    Bcarta.classList.add("Hidden");
    id = 3;
  }
};

Psasso.addEventListener("click", function () {
  Pcarta.classList.add("Hidden");
  Pforbice.classList.add("Hidden");
  Rematch.classList.add("Show");
  funzioneCpu();
  mioId = 1;
  vincitore();
});
Pcarta.addEventListener("click", function () {
  Psasso.classList.add("Hidden");
  Pforbice.classList.add("Hidden");
  Rematch.classList.add("Show");
  funzioneCpu();
  mioId = 2;
  vincitore();
});
Pforbice.addEventListener("click", function () {
  Psasso.classList.add("Hidden");
  Pcarta.classList.add("Hidden");
  Rematch.classList.add("Show");
  funzioneCpu();
  mioId = 3;
  vincitore();
});

function vincitore() {
  if (mioId === id && mioId !== 0 && id !== 0) {
    alert("Hai pareggiato");
  } else if (mioId === 1 && id === 2 && mioId !== 0 && id !== 0) {
    alert("Hai perso!");
  } else if (mioId === 1 && id === 3 && mioId !== 0 && id !== 0) {
    alert("Hai vinto!");
  } else if (mioId === 2 && id === 3 && mioId !== 0 && id !== 0) {
    alert("Hai perso!");
  } else if (mioId === 2 && id === 1 && mioId !== 0 && id !== 0) {
    alert("Hai vinto!");
  } else if (mioId === 3 && id === 1 && mioId !== 0 && id !== 0) {
    alert("Hai perso!");
  } else if (mioId === 3 && id === 2 && mioId !== 0 && id !== 0) {
    alert("Hai vinto!");
  }
  /*idReset = prompt("Rivincita? (Y/N)")
  if(idReset === "Y" || idReset === "y"){
    idReset = 1;
  }*/
}
Rematch.addEventListener("click", function () {
  location.reload();
});