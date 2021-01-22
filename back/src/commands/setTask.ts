import { SetTaskModel } from './../models/TaskModel';
import db from '../database/connection';

export class SetTaskCommand {
    async execute(setTaskModel: SetTaskModel):Promise<number> {
        return db('tasks').insert(setTaskModel);
    }
};