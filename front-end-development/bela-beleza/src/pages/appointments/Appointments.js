import React, { useEffect, useState } from "react";
import api from "../../api/axiosConfig";
import Button from "../../components/button/Button";
import Loading from "../../components/loading/Loading";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [clients, setClients] = useState([]);
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    clientId: "",
    serviceId: "",
    date: "",
    time: "",
  });
  const [editing, setEditing] = useState(false);
   const [loading, setLoading] = useState(true);

  // Puxar agendamentos, clientes e serviços da API
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [appointmentsRes, clientsRes, servicesRes] = await Promise.all([
        api.get("/appointments"),
        api.get("/clients"),
        api.get("/services"),
      ]);
      setAppointments(appointmentsRes.data);
      setClients(clientsRes.data);
      setServices(servicesRes.data);
     } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // remove o loading
      }
    };

      
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        await api.put(`/appointments/${formData.id}`, formData);
      } else {
        await api.post("/appointments", formData);
      }
      setFormData({ id: null, clientId: "", serviceId: "", date: "", time: "" });
      setEditing(false);
      fetchData();
    } catch (err) {
      console.error("Erro ao salvar agendamento:", err);
    }
  };

  const handleEdit = (appt) => {
    setFormData(appt);
    setEditing(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Deseja realmente excluir este agendamento?")) {
      try {
        await api.delete(`/appointments/${id}`);
        fetchData();
      } catch (err) {
        console.error("Erro ao excluir agendamento:", err);
      }
    }
  };
if (loading) return <Loading />;
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Agendamentos</h2>

      {/* Formulário para criar/editar */}
      <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded shadow">
        <div className="flex gap-4 flex-wrap">
          <select
            name="clientId"
            value={formData.clientId}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          >
            <option value="">Selecione o Cliente</option>
            {clients.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name || c.username}
              </option>
            ))}
          </select>

          <select
            name="serviceId"
            value={formData.serviceId}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          >
            <option value="">Selecione o Serviço</option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
        </div>

        <Button type="submit" className="px-3 p-2 mr-2">
          {editing ? "Atualizar Agendamento" : "Criar Agendamento"}
        </Button>
      </form>

      {/* Lista de agendamentos */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Cliente</th>
              <th className="border px-4 py-2">Serviço</th>
              <th className="border px-4 py-2">Data</th>
              <th className="border px-4 py-2">Hora</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => {
              const client = clients.find((c) => c.id === appt.clientId);
              const service = services.find((s) => s.id === appt.serviceId);
              return (
                <tr key={appt.id} className="text-center">
                  <td className="border px-4 py-2">{client?.name || client?.username}</td>
                  <td className="border px-4 py-2">{service?.name}</td>
                  <td className="border px-4 py-2">{appt.date}</td>
                  <td className="border px-4 py-2">{appt.time}</td>
                  <td className="border px-4 py-2 flex justify-center gap-2">
                    <Button className="px-3 p-2 mr-2" onClick={() => handleEdit(appt)}>Editar</Button>
                    <Button onClick={() => handleDelete(appt.id)} className="bg-red-500 hover:bg-red-600 px-3 p-2 mr-2">
                      Excluir
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
