import React, { ChangeEvent, useState } from 'react';

import './styles.css';

const CreateSpace = () => {

  const [board, setBoard] = useState<string>('');

  function handleBoardCaracteres(event: ChangeEvent<HTMLInputElement>) {
    event.target.value = event.target.value.toUpperCase();

    if (event.target.value.length === 3) {
      event.target.value += '-';
    }

    if (event.target.value.length > 7) {
      event.target.value = event.target.value.substr(0, 7);
      setBoard(event.target.value);
    }
  }


  return (
    <div className="create-space-container">
      <header>
        <h1>Estacionamento JS por: HállanSC</h1>
      </header>

      <section>
        <form>

          <fieldset>
            <label>Nome do veículo:</label><br />
            <input 
              type="text" 
              name="name"
              id="name"
              placeholder="Camaro" 
            />
          </fieldset>

          <fieldset>
            <label>Placa do veículo:</label><br />
            <input 
              type="text" 
              name="board"
              id="board"
              placeholder="XXX-XXX" 
              onChange={handleBoardCaracteres}
            />
          </fieldset>

          <button type="submit" className="buttons">Estacionar</button>
        </form>
      </section>
    </div>
  );
};

export default CreateSpace;