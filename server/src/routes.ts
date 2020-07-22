import express from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import knex from './database/connection';

import CarsController from './controllers/CarsController';

const routes = express.Router();

const carsController = new CarsController; 

routes.get('/cars', carsController.index);
routes.get('/cars/:vacancy', carsController.show);

routes.post('/cars', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    board: Joi.string().min(7).max(7).required()
  })
}), carsController.create);

routes.delete('/cars/:id', carsController.delete);

export default routes;