import { Request, Response } from 'express';
import knex from '../database/connection';

class CarsController {

  async index(request: Request, response: Response) {
    const { page = 1 } = request.query;
    
    const [count] = await knex('cars').count();

    const cars = await knex('cars')
      .select('*')
      .offset((Number(page) - 1) * 5)
      .limit(5);

    return response.json({
      cars: cars, 
      count: count['count(*)']
    });
  }

  async show(request: Request, response: Response) {
    const { vacancy } = request.params;

    const car = await knex('cars')
      .select('*')
      .where('id', '=', vacancy).first();


    if (!car) {
      return response.status(406).json({ message: "Esta vaga está vazia." });
    } 

    return response.json({
      car
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