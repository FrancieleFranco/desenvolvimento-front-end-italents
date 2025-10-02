import { updatePetsList } from "./updatePetsList.js";

export function removePet(event, pets, petsList) {
  const index = event.target.dataset.index; 
  pets.splice(index, 1); 
  updatePetsList(pets, petsList); 
}
