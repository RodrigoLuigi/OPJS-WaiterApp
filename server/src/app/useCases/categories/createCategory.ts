import { Request, Response } from 'express';
import { Category } from '../../models/Category';


export async function createCategory(request: Request, response: Response) {
  const {name, icon} = request.body;

  try {
    const category = await Category.create({
      name,
      icon,
    });

    return response.status(201).json(category);
  } catch (error) {
    console.log(error);

    return response.sendStatus(500);
  }
}
