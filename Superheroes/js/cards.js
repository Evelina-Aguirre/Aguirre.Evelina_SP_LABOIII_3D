import { personajes } from "./stroraje.js";

window.onload = function () {
  generarCards();
};
const $superheroesContainer = document.getElementById("superheroes-container");

function crearCard(superheroe) {
    const $card = document.createElement("div");
    $card.classList.add("card");
  
    const $cardBody = document.createElement("div");
    $cardBody.classList.add("card-body");
  
    const $cardTitle = document.createElement("h5");
    $cardTitle.classList.add("card-title");
    $cardTitle.textContent = superheroe.nombre;
  
    const $cardAlias = document.createElement("p");
    $cardAlias.classList.add("card-text");
    $cardAlias.textContent = `Alias: ${superheroe.alias}`;
  
    const $cardEditorial = document.createElement("p");
    $cardEditorial.classList.add("card-text");
    $cardEditorial.textContent = `Editorial: ${superheroe.editorial}`;
  
    const $cardFuerza = document.createElement("p");
    $cardFuerza.classList.add("card-text");
    $cardFuerza.textContent = `Fuerza: ${superheroe.fuerza}`;
  
    const $cardArma = document.createElement("p");
    $cardArma.classList.add("card-text");
    $cardArma.textContent = `Arma: ${superheroe.arma}`;
  
    $cardBody.appendChild($cardTitle);
    $cardBody.appendChild($cardAlias);
    $cardBody.appendChild($cardEditorial);
    $cardBody.appendChild($cardFuerza);
    $cardBody.appendChild($cardArma);
  
    $card.appendChild($cardBody);
  
    return $card;
  }
  

function generarCards() {
    $superheroesContainer.innerHTML = "";
  personajes.forEach((superheroe) => {
    const $card = crearCard(superheroe);
    $superheroesContainer.appendChild($card);
  });
}

