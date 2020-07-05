import React from 'react';

import './styles.css';

/*function handleBoardCaracteres() {
  if (board.length === 3) {
    board += '-';
  }

  if (board.length >= 1) {
    board.toUpperCase();
    //passar a board para o estado
  }
  Esta<br/>cionamento
}
*/
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
          <a className="buttons">Estacionar carro</a><br/>
          <a className="buttons">Mostre-me os carros</a>
        </div> 
      </section>
    </div>
    
  );

};

export default Home;