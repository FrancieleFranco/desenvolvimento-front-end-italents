import React from "react";


export default function Dashboard() {
  return (
    <div className="bg-pink-50 flex items-center justify-center min-h-[calc(80vh-8rem)] p-6">
      <div className="max-w-4xl w-full bg-white rounded shadow-md p-8">
        <h1 className="text-3xl font-bold mb-4 text-pink-500 text-center">Sobre a Bela Beleza</h1>
        <p className="text-gray-700 mb-4">
          A Bela Beleza é uma empresa dedicada a oferecer serviços de estética de alta qualidade,
          com foco no bem-estar e satisfação dos nossos clientes. Nosso time é formado por
          profissionais experientes e apaixonados pelo que fazem.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Missão:</strong> Proporcionar experiências de beleza e cuidado pessoal com excelência.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Visão:</strong> Ser referência em serviços de estética e beleza na região.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Valores:</strong> Ética, comprometimento, qualidade e satisfação do cliente.
        </p>
      </div>
    </div>
  );
}


