import { removePet } from "./removePet.js";

// Função responsável por atualizar a lista exibida no HTML
export function updatePetsList(pets, petsList) {
  petsList.innerHTML = ""; 

  pets.forEach((pet, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      ${pet.detail()}
      <button class="remove" data-index="${index}">Remover</button>
    `;
    petsList.appendChild(listItem);
  });

  const buttonsRemove = document.querySelectorAll(".remove");
  buttonsRemove.forEach((botao) => {
    botao.addEventListener("click", (event) =>
      removePet(event, pets, petsList)
    );
  });
}
