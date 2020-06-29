import { Request, Response } from 'express';
import knex from '../database/connection';

class CarsController {

  async index(request: Request, response: Response) {
    const cars = await knex('cars').select('*');

    return response.json(cars);
  }

}

export default CarsController;