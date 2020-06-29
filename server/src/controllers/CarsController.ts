import { Request, Response } from 'express';
import knex from '../database/connection';

class CarsController {

  async index(request: Request, response: Response) {
    const cars = await knex('cars').select('*');

    return response.json(cars);
  }

  async create(request : Request, response: Response) {
    const { name, board } = request.body;

    await knex('cars').insert({
      name,
      board,
    });

    return response.sendStatus(201);
  }

  async delete(request : Request, response: Response) {
    const id = request.params.id;

    const cars = await knex('cars')
      .delete()
      .where('id', id);

    if (!cars) {
      return response.sendStatus(400);
    }

    return response.json(200);
  }

}

export default CarsController;