// Classe que representa um Pet
export class Pet {
  constructor(name, petWeight, feature) {
    this.name = name;       
    this.petWeight = petWeight; 
    this.feature = feature; 
  }

  detail() {
    return `Nome: ${this.name}, ${this.petWeight} kg, Característica: ${this.feature}`;
  }
}
