import { Request, Response } from 'express';
import { SetCategoryCommand } from '../commands/setCategory';
import { GetCategoriesCommand } from '../commands/getCategories';
import { DeleteTasksCommand } from '../commands/deleteCategory'
import { ResponseResultModel } from '../models/ResponseResultModel';
import { Category } from '../entities/Category';

export default class CategoryController {
    async getCategories(request: Request, response: Response): Promise<Response<ResponseResultModel>> {
        try {
            const getCategories = new GetCategoriesCommand();
            getCategories.execute().then((categories: Array<Category>) => {
                if (categories.length > 0)
                    response.status(200).send({
                        success: true,
                        message: null,
                        data: categories
                    });
                else
                    response.status(404).send({ 
                        success: true,
                        message: 'No one Category found.',
                        data: null
                    });
            }).catch(err => {
                return response.status(400).json({
                    success: false,
                    message: err || 'An Error occurred while getting Categories.',
                    data: null
                });
            });
        } catch (err) {
            return response.status(400).json({
                success: false,
                message: err.message || 'Unexpected error',
                data: null
            });
        }
    }

    async setCategory(request: Request, response: Response): Promise<Response<ResponseResultModel>> {
        try {
            const { description } = request.body;
            const setCategory = new SetCategoryCommand();
            if (description == '' || !description)
                return response.status(400).json({
                    success: false,
                    message: 'Description is required.',
                    data: null
                });
            setCategory.execute(description).then((result:number) => {
                response.status(201).send({
                    success: true,
                    message: 'Category created successfully!',
                    data: null
                });
            }).catch(err => {
                return response.status(400).json({
                    success: false,
                    message: err.message || 'An Error occurred while creating Category.',
                    data: null
                });
            });

        } catch (err) {
            return response.status(400).json({
                success: false,
                message: err.message || 'Unexpected error',
                data: null
            });
        }
    }

    async deleteCategory(request: Request, response: Response): Promise<Response<ResponseResultModel>> {
        try {
            const { categoryId } = request.query;
            const deleteCategory = new DeleteTasksCommand();

            deleteCategory.execute(categoryId).then((result: number) => {
                if (result > 0) {
                    response.status(201).send({
                        succees: true,
                        message: 'Category deleted successfully!',
                        data: null
                    });
                } else {
                    response.status(404).send({
                        succees: false,
                        message: 'Category not found.',
                        data: null
                    });
                }
            }).catch(err => {
                return response.status(400).json({
                    success: false,
                    message: err.message || 'An Error occurred while deleting Category.',
                    data: null
                });
            });
        } catch (err) {
            return response.status(400).json({
                success: false,
                message: err.message || 'Unexpected error',
                data: null
            });
        }
    }
};