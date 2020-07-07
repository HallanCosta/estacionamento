import React, { FormEvent, ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

/*interface Cars {
  id: number;
  name: string;
  board: string;
  create_at: string;
}
*/
const CreateSpace = () => {

  const history = useHistory();
  const [board, setBoard] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    board: '',
  });

  function handleBoardCaracteres(event: ChangeEvent<HTMLInputElement>) {
    event.target.value = event.target.value.toUpperCase();

    if (event.target.value.length === 3) {
      event.target.value += '-';
    }

    if (event.target.value.length > 7) {
      event.target.value = event.target.value.substr(0, 7);
      setBoard(event.target.value);
    }

    handleInputChange(event);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    
    const { name, board } = formData;

    const data = {
      name,
      board
    };
 
    await api.post('cars', data);

    alert('Carro estacionado!');

    history.push('/');
  }

  // Ultimo commit: CreateSpace - adding function handleBoardCaracteres

  return (
    <div className="create-space-container">
      <header>
        <h1>Estacionamento JS por: HállanSC</h1>
      </header>

      <section>
        <form onSubmit={handleSubmit}>

          <fieldset>
            <label>Nome do veículo:</label><br />
            <input 
              type="text" 
              name="name"
              id="name"
              placeholder="Camaro"
              onChange={handleInputChange} 
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