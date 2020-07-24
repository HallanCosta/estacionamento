import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apirestful-estacionamento.herokuapp.com'
});

export default api;