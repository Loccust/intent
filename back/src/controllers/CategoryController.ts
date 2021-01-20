import { Request, Response } from 'express';
import { SetCategoryCommand } from '../commands/setCategory';
import { GetCategoriesCommand } from '../commands/getCategories';

export default class CategoryController {
    async getCategories(request: Request, response: Response): Promise<Response> {
        try {
            const getCategories = new GetCategoriesCommand();
            return getCategories.execute(response);
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            });
        }
    }

    async setCategory(request: Request, response: Response): Promise<Response> {
        try {
            const { description } = request.body;
            const setCategory = new SetCategoryCommand();
            setCategory.execute(description);
            
            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            });
        }
    }
};