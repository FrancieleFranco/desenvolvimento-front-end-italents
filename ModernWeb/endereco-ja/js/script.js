// Seleciona elementos do DOM
const form = document.querySelector("form");
const inputCep = document.querySelector("#cep");
const resultSection = document.querySelector(".result-section");

// Limpa a seção de resultados
function clearResult() {
  resultSection.textContent = "";
   resultSection.style.display = "none";

}

// Validação do CEP (aceita 8 números ou NNNNN-NNN)
function validateCep(cep) {
  return /^[0-9]{5}-?[0-9]{3}$/.test(cep);
}

// Exibir erro
function showError(message) {
  resultSection.textContent = message;
  resultSection.style.color = "red";
  resultSection.style.display = "block";
}

// Exibir resultado
function showResult(message) {
  resultSection.textContent = message;
  resultSection.style.display = "block";  
}

// Formata o CEP para exibir com hífen
function formatCep(cep) {
  return cep.replace(/^(\d{5})(\d{3})$/, "$1-$2");
}

// Limpa mensagem ao digitar
inputCep.addEventListener("input", clearResult);

// Função para consultar a API ViaCEP
async function fetchCep(cep) {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    if (data.erro) {
      showError("CEP não encontrado.");
      return;
    }

    showResult(`
CEP: ${data.cep || formatCep(cep)}
Cidade: ${data.localidade || "-"}
Estado: ${data.uf || "-"}
    `);

  } catch (error) {
    showError("Erro ao consultar a API.");
  }
}

// Evento de envio do formulário
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const cepValue = inputCep.value.trim().replace("-", "");

  if (!validateCep(cepValue)) {
    showError("Por favor, insira um CEP válido (8 números).");
    return;
  }

  fetchCep(cepValue);
  inputCep.value = "";
});
