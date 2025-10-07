import React, { useEffect, useState } from "react";
import api from "../../api/axiosConfig";
import Button from "../../components/button/Button";
import Loading from "../../components/loading/Loading"


export default function ClientsPage() {
  const [clients, setClients] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/clients").then((res) => setClients(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

   if (loading) return <Loading />;
  const handleAdd = async () => {
    const newClient = { name, email, phone };
    const res = await api.post("/clients", newClient);
    setClients([...clients, res.data]);
    setName(""); setEmail(""); setPhone("");
  };

  const handleDelete = async (id) => {
    await api.delete(`/clients/${id}`);
    setClients(clients.filter(c => c.id !== id));
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Clientes</h2>
      <div className="mb-4">
        <input className="border p-2 mr-2" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
        <input className="border p-2 mr-2" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="border p-2 mr-2" placeholder="Telefone" value={phone} onChange={e => setPhone(e.target.value)} />
        <Button className="px-6 p-2 mr-2" onClick={handleAdd}>Adicionar Cliente</Button>
      </div>
      <ul>
        {clients.map(client => (
          <li key={client.id} className="mb-2 flex justify-between items-center">
            <span><strong>Nome: </strong>{client.name} - <strong>Email: </strong>{client.email} - <strong>Telefone: </strong>{client.phone}</span>
            <Button className="px-3 p-2 mr-2" onClick={() => handleDelete(client.id)}>Excluir</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
