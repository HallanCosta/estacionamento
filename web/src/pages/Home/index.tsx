import React from 'react';
import { FaCar } from 'react-icons/fa'
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {

  return (
    
    <div className="home-container">
      <h1>
        Estacione <br/>seu carro
        no <br/>melhor lugar de todos.
      </h1>
      
      <section>
        <h2>Escolha uma opção</h2>
        
        <div className="button-group"> 
          <Link className="buttons" to="/create-space">
            Estacionar carro
            <span>
              <FaCar size={24} />
            </span>
          </Link>
          <Link className="buttons" to="/detail-cars">
            Mostre-me os carros
            <span>
              <FaCar size={24} />
              <FaCar size={20} />
              <FaCar size={24} />
            </span>
          </Link>
        </div> 
      </section>
    </div>
    
  );

};

export default Home;