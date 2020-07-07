import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import './styles.css';

const DetailCars = () => {
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
      
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Board</th>
              <th>Entrada</th>
              <th>Finalizar</th>
            </tr>
          </thead>
          <tbody>
            <tr> 
              <td>Ferrari</td>
              <td>XXX-XXX</td>
              <td>12:50</td>
              <td>
                <a href="#">Finalizar</a>
              </td>
            </tr>
            <tr> 
              <td>Ferrari</td>
              <td>XXX-XXX</td>
              <td>12:50</td>
              <td>
                <a href="#">Finalizar</a>
              </td>
            </tr>
            <tr> 
              <td>Ferrari</td>
              <td>XXX-XXX</td>
              <td>12:50</td>
              <td>
                <a href="#">Finalizar</a>
              </td>
            </tr>
            <tr> 
              <td>Ferrari</td>
              <td>XXX-XXX</td>
              <td>12:50</td>
              <td>
                <a href="#">Finalizar</a>
              </td>
            </tr>
          </tbody>
        </table>

      </section>

    </div>
  );
}

export default DetailCars;