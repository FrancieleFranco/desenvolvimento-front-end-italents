// src/api/axiosConfig.js
import axios from "axios";

// Cria instância do Axios configurada para json-server na porta 3001
const api = axios.create({
  baseURL: "http://localhost:3001", // URL do json-server
  headers: { "Content-Type": "application/json" },
});

// Interceptador para adicionar token, se houver
/*api.interceptors.request.use(
  (config) => {
    const userString = localStorage.getItem("user");
    let user = null;

    // Evita erro se localStorage estiver vazio ou corrompido
    try {
      user = JSON.parse(userString);
    } catch (err) {
      console.warn("Erro ao parsear user do localStorage", err);
    }

    if (user?.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);*/


api.interceptors.request.use(
  (config) => {
    const userString = localStorage.getItem("user");

    if (userString) {  // só parse se tiver algo
      try {
        const user = JSON.parse(userString);
        if (user?.token) config.headers.Authorization = `Bearer ${user.token}`;
      } catch (err) {
        console.warn("Erro ao parsear user do localStorage", err);
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);


// Interceptador para logar resposta e erros (opcional, ajuda no debug)
api.interceptors.response.use(
  (response) => {
    // console.log("Resposta do Axios:", response);
    return response;
  },
  (error) => {
    console.error("Erro na requisição Axios:", error);
    return Promise.reject(error);
  }
);

export default api;
