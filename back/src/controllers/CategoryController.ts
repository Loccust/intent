import { Request, Response } from 'express';
import { SetCategoryCommand } from '../commands/setCategory';
import { GetCategoriesCommand } from '../commands/getCategories';
import { Category } from '../entities/Category';

export default class CategoryController {
    async getCategories(request: Request, response: Response): Promise<Response> {
        try {
            const getCategories = new GetCategoriesCommand();
            getCategories.execute().then((data: Array<Category>) => {
                if (data.length > 0)
                    response.status(200).send(data);
                else
                    response.status(200).send({  message: 'No one Category found.' });
            }).catch(err => {
                return response.status(400).json({
                    message: 'An Error occurred while getting Categories.',
                    data: err
                });
            });
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
            setCategory.execute(description).then(x => {
                response.status(201).send({
                    message: 'Category created successfully! '
                })
            }).catch(err => {
                return response.status(400).json({
                    message: 'An Error occurred while creating Category.',
                    data: err
                });
            });

        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            });
        }
    }
};