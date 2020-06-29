import express from 'express';
import knex from './database/connection';

import CarsController from './controllers/CarsController';


const routes = express.Router();

const carsController = new CarsController; 

routes.get('/cars', carsController.index);

routes.post('/cars', async (request, response) => {
  
});

routes.delete('/cars/:id', async (request, response) => {
  
});

export default routes;