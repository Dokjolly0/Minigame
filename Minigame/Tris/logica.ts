import { quadrato1 } from "./refactoring_project";
function logica1(i) {
  let scelta1 = "x";
  return () => {
    if (vincita) return;
    if (
      !quadrato[i].classList.contains("x") ||
      !quadrato[i].classList.contains("o")
    ) {
      if (scelta1 === "x") {
        quadrato1[i].classList.add("x");
        //aggiunta1(i)
        //vincitore(scelta);
        scelta1 = "o";
      } else if (scelta1 === "o") {
        quadrato1[i].classList.add("o");
        //aggiunta1(i)
        //vincitore(scelta);
        scelta1 = "x";
      }
    }
  };
}
export default logica1;
// if (
//     !quadrato[i].classList.contains("x") ||
//     !quadrato[i].classList.contains("o")
//   ) {
//     if (scelta === "x") {
//       if (
//         quadrato[i].classList.contains("x") ||
//         quadrato[i].classList.contains("o")
//       ) {
//         return;
//       } else {
//         quadrato[i].classList.add("x");
//         aggiunta(i);
//         vincitore(scelta);
//         scelta = "o";
//       }
//     } else if (scelta === "o") {
//       if (
//         quadrato[i].classList.contains("x") ||
//         quadrato[i].classList.contains("o")
//       ) {
//         return;
//       } else {
//         quadrato[i].classList.add("o");
//         aggiunta(i);
//         vincitore(scelta);
//         scelta = "x";
//       }
//     }
//   }
