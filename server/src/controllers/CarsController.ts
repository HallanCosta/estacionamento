import { Request, Response } from 'express';
import knex from '../database/connection';

class CarsController {

  async index(request: Request, response: Response) {
    const { page = 1 } = request.query;
    
    const [count] = await knex('cars').count();

    const cars = await knex('cars')
      .select('*')
      .offset(((page) - 1) * 5)
      .limit(5);

    return response.json({
      cars, 
      count: count['count(*)']
    });
  }

  async create(request : Request, response: Response) {
    const { name, board } = request.body;

    await knex('cars').insert({
      name,
      board,
    });

    return response.status(201).json();
  }

  async delete(request : Request, response: Response) {
    const id = request.params.id;

    const cars = await knex('cars')
      .delete()
      .where('id', id);

    if (!cars) {
      return response.status(400).json({ message: 'Error: bad request' });
    }

    return response.status(200).json();
  }

}

export default CarsController;