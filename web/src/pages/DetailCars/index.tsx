import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import api from '../../services/api';

import './styles.css';

interface ApiResponse {
  cars: [{
    id: number;
    name: string;
    board: string;
    created_at: string;
  }],
  count: number;
}

interface Cars {
  id: number;
  name: string;
  board: string;
  created_at: string;
}


const DetailCars = () => {

  const [cars, setCars] = useState<Cars[]>([]); 
  const [countCars, setCountCars] = useState<number>(0); 
  const [exitCar, setExitCar] = useState<number>(0);

  const history = useHistory();

  useEffect(() => {
    
    api.get<ApiResponse>('/cars')
      .then(response => {
        const allCars = response.data.cars;
        const carsObject = allCars.map(car => {

          const { id, name, board, created_at } = car;

          const cutCreatedAt = created_at.split(' ');

          const data = cutCreatedAt[0].replace(/(^\d{4})-(\d{2})-(\d{2})/, '$3/$2/$1');
          const hour = cutCreatedAt[1];

          return {
            id,
            name,
            board,
            created_at: `${data} - ${hour}`
          }
          
        });

        setCars(carsObject);
        setCountCars(response.data.count);
        
      }).catch(error => {
        alert('Ops.. Ocorreu um erro!');
      })
  }, [exitCar]);


  async function handleCarExit(id: number) {
    
    const exit = await api.delete(`/cars/${id}`);

    if (!exit) {
      alert('Ocorreu um erro');
    }

    setExitCar(id);
    alert('Carro retirado!');
  }

  return (
    <div className="detail-cars-container">

      <header>
        <h1>Carros Estacionados...</h1>
      </header>
      
      <section>
        <Link to='/'>
          <FaArrowLeft 
            className="arrowLeft"
            size={30}
          />
        </Link>
      
        <h2>Aqui estão todos os carros estacionados</h2>
        
        {cars.map(car => (
          <ul key={car.id}>
            <li>Nome: <span>{car.name}</span></li>
            <li>Placa: <span>{car.board}</span></li>
            <li>Entrada: <span>{car.created_at}</span></li>
            <li className="entry">
              <button onClick={() => handleCarExit(car.id)}>Finalizar</button>
            </li>
          </ul>
        ))}

      </section>

    </div>
  );
}

export default DetailCars;