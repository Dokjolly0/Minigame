//Prendi la search bar e salvala in una variabile
const searchBar = document.querySelector(".search-bar input");
//Prendi i personaggi e salvali in un'array
const characters = document.querySelectorAll(".character");

// Aggiungi un event listener all'input della search bar
searchBar.addEventListener("input", function (event) {
  // Prendi il valore dell'input e rimuovi gli spazi iniziali e finali
  const searchQuery = event.target.value.trim().toLowerCase();

  // Per ogni personaggio, controlla se il nome del personaggio include il valore dell'input
  characters.forEach((character) => {
    //Crea una variabile per il nome del personaggio
    const characterName = character
      .querySelector("h2")
      .textContent.toLowerCase();
    // Se il nome del personaggio include il valore dell'input, mostra il personaggio
    if (characterName.includes(searchQuery)) {
      // Mostra il personaggio ci sono personaggi con quell'input
      character.style.display = "block";
    } else {
      // Nasconde il personaggio altrimenti
      character.style.display = "none";
    }
  });
});
