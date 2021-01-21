import db from '../database/connection';
import { Task } from '../entities/Task';

export class GetTasksCommand {
    async execute(categoryId):Promise<Array<Task>> {
        return await db('tasks').where('categoryId', categoryId).then((results: Array<Task>) => results);
    }
}