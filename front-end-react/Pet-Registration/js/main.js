import { addPet } from "./addPet.js"

const petForm = document.getElementById("petForm");
const petsList = document.getElementById("petsList");

let pets = [];

// Captura o evento de envio do formulário
petForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita recarregar a página

  const name = document.getElementById("name").value;
  const petWeight = document.getElementById("petWeight").value;
  const feature = document.getElementById("feature").value;


  addPet(name, petWeight, feature, pets, petsList);

  petForm.reset(); 
});
