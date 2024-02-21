const numeroCaratteriEl = document.querySelector("#length");
const maiuscoleEl = document.querySelector("#uppercase");
const minuscoleEl = document.querySelector("#lowercase");
const caratteriEl = document.querySelector("#special");
const numeriEl = document.querySelector("#numbers");
const generateEl = document.querySelector("#generateButton");

generateEl?.addEventListener("click", function () {
  const lunghezzaCaratteri = Number(numeroCaratteriEl.value);
  const maiuscoleBool = maiuscoleEl.checked;
  const minuscoleBool = minuscoleEl.checked;
  const caratteriBool = caratteriEl.checked;
  const numeriBool = numeriEl.checked;
  const lettereArr = "abcdefghijklmnopqrstuvwxyz".split("");
  const caratteriArr = "!@#$%&*?+-_".split("");
  const numeriArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const selettoreFinale = [];
  let passwordArr = [];
  let password = "";

  if (!maiuscoleBool && !minuscoleBool && !caratteriBool && !numeriBool) {
    document.querySelector("#password").classList.remove("hidden");
    document.querySelector("#password").textContent =
      "Seleziona almeno uno dei 4 campi!";
    return;
  }
  if (lunghezzaCaratteri === 0) {
    document.querySelector("#password").classList.remove("hidden");
    document.querySelector("#password").textContent =
      "Devi inserire una lunghezza valida!";
    return;
  }

  if (maiuscoleBool) {
    selettoreFinale.push(1);
  }
  if (minuscoleBool) {
    selettoreFinale.push(2);
  }
  if (caratteriBool) {
    selettoreFinale.push(3);
  }
  if (numeriBool) {
    selettoreFinale.push(4);
  }

  for (let i = 0; i < lunghezzaCaratteri; i++) {
    const randomNumber = Math.floor(Math.random() * selettoreFinale.length);
    const scelta = selettoreFinale[randomNumber];

    switch (scelta) {
      case 1:
        passwordArr.push(
          lettereArr.map((stringa) => stringa.toUpperCase())[
            Math.floor(Math.random() * lettereArr.length)
          ]
        );
        break;
      case 2:
        passwordArr.push(
          lettereArr.map((stringa) => stringa.toLowerCase())[
            Math.floor(Math.random() * lettereArr.length)
          ]
        );
        break;
      case 3:
        passwordArr.push(
          caratteriArr[Math.floor(Math.random() * caratteriArr.length)]
        );
        break;
      case 4:
        passwordArr.push(
          numeriArr[Math.floor(Math.random() * numeriArr.length)]
        );
        break;
    }
  }
  //console.log(passwordArr);
  password = passwordArr.join("");
  //console.log(password);
  document.querySelector("#password").classList.remove("hidden");
  document.querySelector("#password").textContent = password;
});
