import { useState } from 'react';

export const Contador = () => {
  const [numero, setNumero] = useState(0);

  const incrementar = () => {
    setNumero(numero + 1);
  };

  return (
    <div className="box-contador">
      <header>
        <h2>Olá, bem vindo ao super contador!!</h2>
        <h5>Clique no botão para incrementar o número</h5>
      </header>
      <p>{numero}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};
