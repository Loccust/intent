import db from '../database/connection';

export class DeleteTasksCommand {
    async execute(categoryId):Promise<number> {
        return await db('categories').where('id', categoryId).del();
    }
}