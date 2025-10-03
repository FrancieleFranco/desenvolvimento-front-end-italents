import React from "react";
import Header from "../../components/header/Header";
import "./about.css";


function About() {

  return (
    <div className="about-container">
      <Header />
 <h1>Sobre o Aurora</h1>
      <p>
        O Aurora é um aplicativo simples e acolhedor, criado para oferecer uma experiência visual agradável aos usuários.
      </p>
      <p>
        Ele permite experimentar diferentes <strong>temas de cores</strong>, mas é importante notar que a troca de cores <strong>afeta apenas o container dentro da Dashboard</strong>, não o restante das páginas. Isso garante que a navegação continue clara e consistente, enquanto você se diverte personalizando a área principal do app.
      </p>
      <p>
        Sempre que você altera o tema na Dashboard, pequenas mensagens simpáticas aparecem, tornando a experiência mais leve e divertida.
      </p>
      <p>
        O aplicativo é <strong>seguro e não coleta informações pessoais</strong>, sendo apenas uma forma de explorar cores e experimentar diferentes visuais enquanto navega pelas páginas Home, Dashboard e Sobre.
      </p>
      <p>
        Navegue, explore os temas na Dashboard e aproveite a experiência visual do Aurora!
      </p>
    </div>
  );
}

export default About;
    