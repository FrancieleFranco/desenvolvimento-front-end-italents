// Seleciona elementos do DOM
const form = document.querySelector(".form-section form");
const inputCep = document.querySelector("#cep");
const resultSection = document.querySelector(".result-section");


function clearResult() {
  resultSection.textContent = "";
}


function validateCep(cep) {
  const regex = /^[0-9]{8}$/;
  return regex.test(cep);
}

// Função para exibir mensagem de erro
function showError(message) {
  resultSection.textContent = message;
  resultSection.style.color = "red";
}

// Função para exibir resultado
function showResult(message) {
  resultSection.textContent = message;
  resultSection.style.color = "black";
}

// Limpa mensagem ao digitar
inputCep.addEventListener("input", clearResult);

// Evento de envio do formulário
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const cepValue = inputCep.value.trim();

  if (!validateCep(cepValue)) {
    showError("Por favor, insira um CEP válido (8 números).");
    return;
  }

  showResult(`CEP informado: ${cepValue}. Aqui será exibido o resultado da consulta.`);

  inputCep.value = "";
});
