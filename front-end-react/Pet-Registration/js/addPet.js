import { Pet } from "./pet.js";
import { updatePetsList } from "./updatePetsList.js";

export function addPet(name, petWeight, feature, pets, petsList) {
  const newPet = new Pet(name, petWeight, feature);
  pets.push(newPet); 
  updatePetsList(pets, petsList); 
}
