import React, { useState } from "react";

function FuncaoPrincipal() {
  const [entrada, setEntrada] = useState("seu nome aqui");

  const handleNomeClick = () => {
    const nome = window.prompt("Digite seu nome");
    if (nome !== null) {
      setEntrada(nome);
    }
  };


  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

  return (
    <div id="fprincipal">
      <h1 id="tituloprincipal">Olá mundo</h1>
      <p>Seu nome é</p>
      <p id="nome" style={{ color: randomColor }}>{entrada}</p>
      <button onClick={handleNomeClick}>Clique para inserir o nome</button>
    </div>
  );
}

export default FuncaoPrincipal;
