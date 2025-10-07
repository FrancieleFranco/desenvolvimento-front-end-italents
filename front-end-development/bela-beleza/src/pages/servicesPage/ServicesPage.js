import React, { useEffect, useState } from "react";
import api from "../../api/axiosConfig";
import Button from "../../components/button/Button";
import Loading from "../../components/loading/Loading";

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/services")
      .then((res) => setServices(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false)); // remove o loading quando terminar
  }, []);

if (loading) return <Loading />; // mostra 


  const handleAdd = async () => {
    const newService = { name, price: Number(price) };
    const res = await api.post("/services", newService);
    setServices([...services, res.data]);
    setName("");
    setPrice("");
  };

  const handleDelete = async (id) => {
    await api.delete(`/services/${id}`);
    setServices(services.filter((service) => service.id !== id));
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Serviços</h2>
      <div className="mb-4">
        <input
          className="border p-2 mr-2"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-2 mr-2"
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Button className="px-6 p-2 mr-2" onClick={handleAdd}>
          Adicionar Serviço
        </Button>
      </div>
      <ul>
        {services.map((s) => (
          <li key={s.id} className="mb-2 flex justify-between items-center">
            <span>
              {s.name} - ${s.price}
            </span>
            <Button
              className="px-3 p-2 mr-2"
              onClick={() => handleDelete(s.id)}
            >
              Excluir
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
