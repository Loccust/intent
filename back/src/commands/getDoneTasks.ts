import db from '../database/connection';
import { Response } from 'express';

export class GetTasksCommand {
    async execute(categoryId, response: Response) {
        return await db('tasks').count('done', 1).where('categoryId', categoryId).then((results) => response.json(results));
    }
}