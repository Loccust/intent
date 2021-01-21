import { SetTaskStatusCommand } from './../commands/setTaskStatus';
import { Request, Response } from 'express';
import { GetTasksCommand } from '../commands/getTasks';
import { SetTaskCommand } from '../commands/setTask';
import { SetTaskModel, SetTaskStatusModel } from '../models/TaskModel';
import { Task } from '../entities/Task';

export default class TaskController {
    async getTasksByCategory(request: Request, response: Response): Promise<Response> 
    {
        try {
            const { categoryId } = request.query;
            const getTasks = new GetTasksCommand();
            getTasks.execute(categoryId).then((data: Array<Task>) => {
                if (data.length > 0)
                    response.status(200).send(data);
                else
                    response.status(200).send({ message: 'No one Task found.'});
            }).catch(err => {
                return response.status(400).json({
                    message: 'An Error occurred while getting Tasks.',
                    data: err
                });
            });

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
            setTask.execute(setTaskModel).then(x => {
                response.status(201).send({
                    message: 'Tasks created successfully! '
                })
            }).catch(err => {
                return response.status(400).json({
                    message: 'An Error occurred while creating Task.',
                    data: err
                });
            });
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