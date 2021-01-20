import db from '../database/connection';
import { Response } from 'express';

export class GetTasksCommand {
    async execute(categoryId, response: Response) {
        return await db('tasks').count('id').where('categoryId', categoryId).then((results) => response.json(results));
    }
}