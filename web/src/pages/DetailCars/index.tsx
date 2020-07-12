import React, { useState, useEffect, MouseEvent } from 'react';
import { Link, useHistory, NavLink } from 'react-router-dom';
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

const DetailCars = (props: any) => {

  const [cars, setCars] = useState<Cars[]>([]); 
  const [exitCar, setExitCar] = useState<number>(0);

  const [currentPage, setCurrentPage] = useState<number>(1);  const [total, setTotal] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [pages, setPages] = useState<number[]>([]);
  const [previous, setPrevious] = useState<object>({
    color: "#0c0c0c",
    opacity: .5
  });
  const [next, setNext] = useState<object>({
    color: "#007bff",
    opacity: 1
  });
  const [numbersPagination, setNumbersPagination] = useState<object>({
    color: "#fff",
    background: "#007bff",
    outline: "1px solid #007bff"
  });


  const history = useHistory();

  useEffect(() => {

    api.get<ApiResponse>(`/cars?page=${currentPage}`)
      .then(response => {

        const allCars = response.data.cars;
        const totalCars = Number(response.data.count);
        const totalPages = Math.ceil(totalCars / limit);

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

        const arrayPages = [];
        for(let i = 0; i < totalPages; i++) {
          arrayPages.push(i);
        }

        setPages(arrayPages);
        setCars(carsObject);



      }).catch(error => {
        alert('Ops.. Ocorreu um erro!');
      })

  }, [exitCar, currentPage]);


  async function handleCarExit(id: number) {
    
    const exit = await api.delete(`/cars/${id}`);

    if (!exit) {
      alert('Ocorreu um erro');
    }

    setExitCar(id);
    alert('Carro retirado!');
  }

  function handleUrlPreviousPagination() {
    const page = Number(props.match.params.page);

    if (page > 1) {
      return `/detail-cars/${page-1}`
    }

    return props.match.url;
  }

  function handleClickPreviousPagination(event: any) {
    const page = Number(props.match.params.page) - 1;

    if (page > 0) {
      setCurrentPage(page);
      setPrevious({
        color: "#fff",
        opacity: 1
      });
    } 

    if (page == 1) {
      event.target.removeAttribute('href');
      setPrevious({
        color: "#0c0c0c",
        opacity: .5,
        outline: "1px solid #dee2e6"
      });
    }

    setNumbersPagination({
      color: "#fff",
      background: "#007bff",
      outline: "1px solid #007bff"
    });
  }

  function handleUrlNextPagination() {
    const page = Number(props.match.params.page);

    if (page < pages.length) {
      return `/detail-cars/${page+1}`
    }

    return props.match.url;
  }

  function handleClickNextPagination(event: any) {
    const page = Number(props.match.params.page) + 1;

    if (page < pages.length) {
      setCurrentPage(page);
      setNext({
        color: "#fff",
        opacity: 1
      });
    } 

    
    if (page == pages.length) {
      event.target.removeAttribute('href');
      setNext({
        color: "#0c0c0c",
        opacity: .5,
        outline: "1px solid #dee2e6"
      });
    }

    setNumbersPagination({
      color: "#fff",
      background: "#007bff",
      outline: "1px solid #007bff"
    });

  }

  function handleClickNumbersPagination(page: number) {

    if (props.match.params.page == 6) {
      setNext({
        color: "#0c0c0c",
        opacity: .5
      });
    }

    setCurrentPage(page);
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
        
        <main>
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
        </main>

       
        <footer>
          <nav>
            <ul>

              <li>
                <NavLink
                  className="previous-next"
                  to={handleUrlPreviousPagination}
                  activeStyle={previous}
                  onLoad={() => setPrevious({
                    color: "#0c0c0c",
                    opacity: .5
                  })}
                  onClick={handleClickPreviousPagination}
                >
                  Voltar
                </NavLink>
              </li>
                
              {pages.map(page => (
                <li key={page}>
                  <NavLink 
                    to={() => `/detail-cars/${page+1}`} 
                    activeStyle={numbersPagination}
                    onClick={() => handleClickNumbersPagination(page+1)}
                  >
                    {page+1}
                  </NavLink>
                </li>
              ))}

              <li>
                <NavLink 
                  className="previous-next"
                  to={handleUrlNextPagination}
                  activeStyle={next} 
                  onClick={handleClickNextPagination}
                >
                  Avançar
                </NavLink>
              </li>


            </ul>
          </nav>
        </footer>

      </section>

    </div>
  );
}

export default DetailCars;