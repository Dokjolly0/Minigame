let numeroInserito = prompt("Inserisci un numero che termina con 0:");

let numeroInseritoArrayPari = [],
  numeroInseritoArrayDispari = [];

for (let i = 0; i < numeroInserito.length; i++) {
  if (numeroInserito[i] % 2 === 0) {
    numeroInseritoArrayPari.push(numeroInserito[i]);
  } else {
    numeroInseritoArrayDispari.push(numeroInserito[i]);
  }
}

if (numeroInseritoArrayDispari.length >= 1) {
  console.log(
    `Nel numero inserito ci sono ${numeroInseritoArrayDispari.length} numeri dispari`
  );
} else {
  console.log("Tutti i numeri della sequenza sono pari.");
}
