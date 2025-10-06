import api from "../api/axiosConfig";

export const login = async (username, password) => {
  try {
    console.log("Tentando acessar a API com:", username, password);
    const response = await api.get(`/users?username=${username}&password=${password}`);
    console.log("Resposta da API:", response.data);

    if (response.data.length === 0) throw new Error("Usuário ou senha inválidos");

    return { ...response.data[0], token: "fake-token" };
  } catch (err) {
    console.error("Erro no login:", err);
    throw err; 
  }
};