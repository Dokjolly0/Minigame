import logica1 from "./logica";
const quadrato1: any[] = [];
for (let i = 1; i <= 9; i++) {
  quadrato1.push(document.getElementById(`quadrato${i}`));
}

//const rivincita1 = document.querySelector("#rivincita");
//let numero1 = 0;
//let vincita1 = false;
let callbackFunction1;
let callbacks1: any = [];

for (let i = 0; i < 9; i++) {
  callbackFunction1 = logica1(i);
  callbacks1.push(callbackFunction1);
  quadrato1[i].addEventListener("click", callbackFunction1);
}
export { quadrato1 };
