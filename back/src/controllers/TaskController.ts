import { SetTaskStatusCommand } from './../commands/setTaskStatus';
import { Request, Response } from 'express';
import { GetTasksCommand } from '../commands/getTasks';
import { SetTaskCommand } from '../commands/setTask';
import { SetTaskModel, SetTaskStatusModel } from '../models/TaskModel';

export default class TaskController {
    async getTasksByCategory(request: Request, response: Response): Promise<Response> 
    {
        try {
            const { categoryId } = request.query;
            const getTasks = new GetTasksCommand();
            return getTasks.execute(categoryId, response);
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            });
        }
    }

    async setTask(request: Request, response: Response): Promise<Response> {
        try {
            const setTaskModel: SetTaskModel = request.body;
            const setTask = new SetTaskCommand();
            setTask.execute(setTaskModel);
            
            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            });
        }
    }

    async changeStatus(request: Request, response: Response): Promise<Response> {
        try {
            const setTaskStatusModel: SetTaskStatusModel = request.body;
            const setTaskStatus = new SetTaskStatusCommand();
            setTaskStatus.execute(setTaskStatusModel);

            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            });
        }
    }
}