import { useState } from "react";
import "./animalForm.css";

const AnimalForm = ({ onAddAnimal }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !image) {
      setError("Preencha todos os campos.");
      return;
    }
    if (name.length > 30) {
      setError("Nome máximo 30 caracteres.");
      return;
    }
    if (description.length > 100) {
      setError("Descrição máximo 100 caracteres.");
      return;
    }

    onAddAnimal({ name, description, image });
    setName("");
    setDescription("");
    setImage("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="animal-form">
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Nome do Animal"
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength={30}
      />
      <input
        type="text"
        placeholder="Descrição do Animal"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        maxLength={100}
      />
      <input
        type="text"
        placeholder="URL da Imagem"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Adicionar Animal</button>
    </form>
  );
};

export default AnimalForm;


