const quadrato1 = document.getElementById("quadrato1");
const quadrato2 = document.getElementById("quadrato2");
const quadrato3 = document.getElementById("quadrato3");
const quadrato4 = document.getElementById("quadrato4");
const quadrato5 = document.getElementById("quadrato5");
const quadrato6 = document.getElementById("quadrato6");
const quadrato7 = document.getElementById("quadrato7");
const quadrato8 = document.getElementById("quadrato8");
const quadrato9 = document.getElementById("quadrato9");

const container = document.querySelector(".container");
let scelta = "o";

// quadrato1.addEventListener("click", function () {
//   if (!this.classList.contains("x") || !this.classList.contains("o")) {
//     if (scelta === "o") {
//       this.classList.add("x");
//       scelta = "x";
//     } else {
//       this.classList.add("o");
//       scelta = "o";
//     }
//   }
// });

//#region Quadrati
quadrato1.addEventListener("click", function () {
  logica(quadrato1);
});
quadrato2.addEventListener("click", function () {
  logica(quadrato2);
});
quadrato3.addEventListener("click", function () {
  logica(quadrato3);
});
quadrato4.addEventListener("click", function () {
  logica(quadrato4);
});
quadrato5.addEventListener("click", function () {
  logica(quadrato5);
});
quadrato6.addEventListener("click", function () {
  logica(quadrato6);
});
quadrato7.addEventListener("click", function () {
  logica(quadrato7);
});
quadrato8.addEventListener("click", function () {
  logica(quadrato8);
});
quadrato9.addEventListener("click", function () {
  logica(quadrato9);
});
//#endregion

function giaScelto() {
  if (scelta === "x" || scelta === "o") {
    this.removeEventListener("click");
  }
}
//quadrato1
function logica(quadrato) {
  if (!quadrato.classList.contains("x") || !this.classList.contains("o")) {
    if (scelta === "o") {
      quadrato.classList.add("x");
      scelta = "x";
    } else {
      quadrato.classList.add("o");
      scelta = "o";
    }
  }
}
