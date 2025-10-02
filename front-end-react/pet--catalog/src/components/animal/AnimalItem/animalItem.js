import React, { useState } from "react";
import "./animalItem.css";

const AnimalItem = ({ animal, onDelete, onEdit, children }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedAnimal, setEditedAnimal] = useState({ ...animal });
  const [error, setError] = useState("");

  const handleDelete = () => onDelete(animal.id);

  const handleEdit = () => {
    if (!editedAnimal.name || !editedAnimal.description) {
      setError("Preencha todos os campos.");
      return;
    }
    if (editedAnimal.name.length > 30) {
      setError("Nome máximo 30 caracteres.");
      return;
    }
    if (editedAnimal.description.length > 100) {
      setError("Descrição máximo 100 caracteres.");
      return;
    }
    onEdit(animal.id, editedAnimal);
    setIsEditing(false);
    setError("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedAnimal((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="animal-item">
      {isEditing ? (
        <div className="edit-form">
          {error && <p className="error">{error}</p>}
          <input
            name="name"
            value={editedAnimal.name}
            onChange={handleChange}
            maxLength={30}
          />
          <textarea
            name="description"
            value={editedAnimal.description}
            onChange={handleChange}
            maxLength={100}
          />
          <button onClick={handleEdit}>Salvar</button>
          <button onClick={() => setIsEditing(false)}>Cancelar</button>
        </div>
      ) : (
        <div className="animal-view">
          <h3>{animal.name}</h3>
          <p>{animal.description}</p>
          <img src={animal.image} alt={animal.name} />
          {children}
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={handleDelete}>Excluir</button>
        </div>
      )}
    </div>
  );
};

export default AnimalItem;
