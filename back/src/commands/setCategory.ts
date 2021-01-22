import db from '../database/connection';

export class SetCategoryCommand {
    async execute(description):Promise<number> {
        return await db('categories').insert({description});
    }
};