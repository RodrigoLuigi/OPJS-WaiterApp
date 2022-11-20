import { Request, Response } from 'express';
import { Category } from '../../models/Category';


export async function deleteCategory(request: Request, response: Response) {
  const { categoryId } = request.params;

  await Category.findByIdAndDelete(categoryId);

  return response.status(200).json();
}
