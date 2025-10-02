import React, { useState, useEffect } from "react";
import {
  fetchAnimals,
  addAnimal,
  deleteAnimal,
  updateAnimal,
} from "./service/api.js";
import AnimalList from "./components/animal/AnimalList/animalList.js";
import AnimalForm from "./components/form/animalForm/animalForm.js";
import Header from "./components/header/header.js";
import Footer from "./components/Footer/Footer.js";
import Loading from "./components/ui/Loading/Loading.js";
import Error from "./components/ui/Error/Error.js";
import "./App.css";

const App = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAnimals = async () => {
      try {
        const data = await fetchAnimals();
        setAnimals(data);
      } catch (err) {
       setError("Falha ao carregar os animais: ")
      } finally {
        setLoading(false);
      }
    };
    loadAnimals();
  }, []);

  const handleAddAnimal = async (animal) => {
    const newAnimal = await addAnimal(animal);
    setAnimals([...animals, newAnimal]);
  };

  const handleDeleteAnimal = async (id) => {
    await deleteAnimal(id);
    setAnimals(animals.filter((animal) => animal.id !== id));
  };

  const handleEditAnimal = async (id, updatedAnimal) => {
    const updatedData = await updateAnimal(id, updatedAnimal);
    setAnimals(
      animals.map((animal) => (animal.id === id ? updatedData : animal))
    );
  };

  return (
    <div className="app">
      <Header />
      {loading ? (
        <Loading />
      ) : error ? (
        <Error message={error} />
      ) : (
        <>
          <AnimalForm onAddAnimal={handleAddAnimal} />
          <AnimalList
            animals={animals}
            onDeleteAnimal={handleDeleteAnimal}
            onEditAnimal={handleEditAnimal}
          />
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;
