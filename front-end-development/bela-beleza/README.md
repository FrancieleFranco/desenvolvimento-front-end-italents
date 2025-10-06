# Projeto 16 - Bela Beleza
![Tela do Projeto - Login](src/assets/images/login.jpg)
![Tela do Projeto - Dashboard](src/assets/images/dashboard.jpg)

Este projeto foi desenvolvido como parte da **Entrega 2** do curso Desenvolvimento Front-End com React - iTalents.

## Descrição
O **Bela Beleza** é um sistema de demonstração para gerenciamento de uma empresa de beleza, com foco em autenticação e visualização de informações da empresa.  

O projeto utiliza React, Context API para autenticação, Tailwind CSS para estilização e uma API simulada via JSON Server.

O layout é responsivo, com Header e Footer fixos e área principal centralizada, garantindo uma experiência visual limpa e moderna.

## Tecnologias Usadas
- React
- React Router DOM
- Tailwind CSS
- Axios
- JSON Server

## Funcionalidades
- **Login**: Autenticação de usuário via JSON Server.  
- **Dashboard / Sobre**: Página principal com informações sobre a empresa.  
- **Header**: Fixo no topo, exibe o nome da empresa e botão de logout.  
- **Footer**: Fixo no fundo da página.  
- Layout responsivo sem scroll horizontal.  
- **NotFound (404)**: Página exibida para rotas inexistentes.  

# Passos para execução local
1. Clonar o repositório:  
git clone 

2. Acessar a pasta do projeto:
cd bela-beleza

3. Instalar as dependências:
npm install 


4. Rodar a aplicação React 
npm start

5. Rodar o JSON Server (em um terminal) 
npm run server
A API será iniciada em: http://localhost:3001/users

6. Rodar a aplicação React (em outro terminal)
npm start

7. Abrir no navegador
http://localhost:3000:


# Credenciais para teste

Para acessar a aplicação, use os seguintes dados:

Usuário: admin

Senha: 1234

Se qualquer outro usuário/senha for utilizado, será exibida a mensagem de erro: "Usuário ou senha inválidos".