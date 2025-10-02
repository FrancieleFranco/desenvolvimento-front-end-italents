import React from "react";
import "./animalDetail.css";

const AnimalDetail = ({ animal, children  }) => {
  return (
    <div className="animal-detail">
      <h2>{animal.name}</h2>
      <img src={animal.image} alt={animal.name} />
      <p>{animal.description}</p>
      {children}
    </div>
  );
};

export default AnimalDetail;
