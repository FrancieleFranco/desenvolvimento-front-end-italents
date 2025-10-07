import axios from "axios";

// Cria instância do Axios configurada para json-server na porta 3001
const api = axios.create({
  baseURL: "http://localhost:3001", 
  headers: { "Content-Type": "application/json" },
});


api.interceptors.request.use(
  (config) => {
    const userString = localStorage.getItem("user");

    if (userString) {  
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
    console.log("Resposta do Axios:", response);
    return response;
  },
  (error) => {
    console.error("Erro na requisição Axios:", error);
    return Promise.reject(error);
  }
);

export default api;
