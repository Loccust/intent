import db from '../database/connection';

export class SetCategoryCommand {
    async execute(description) {
        return await db('categories').insert({description});
    }
};