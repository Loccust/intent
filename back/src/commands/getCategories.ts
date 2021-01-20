import db from '../database/connection';
import { Response } from 'express';

export class GetCategoriesCommand {
    async execute(response: Response) {
        return await db('categories').then((results) => response.json(results));
    }
};