import db from '../database/connection';
import { Category } from '../entities/Category';

export class GetCategoriesCommand {
    async execute():Promise<Array<Category>> {
        return await db('categories').then((results:Array<Category>) => results);
    }
};