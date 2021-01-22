import db from "../database/connection";
import { SetTaskStatusModel } from '../models/TaskModel';

export class SetTaskStatusCommand {
    async execute(setTaskStatusModel: SetTaskStatusModel):Promise<number>{
        return db('tasks').where('id', setTaskStatusModel.taskId).update({'done': setTaskStatusModel.done});
    }
}