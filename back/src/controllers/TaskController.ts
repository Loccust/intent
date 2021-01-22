import { SetTaskStatusCommand } from './../commands/setTaskStatus';
import { Request, Response } from 'express';
import { GetTasksCommand } from '../commands/getTasks';
import { SetTaskCommand } from '../commands/setTask';
import { SetTaskModel, SetTaskStatusModel } from '../models/TaskModel';
import { ResponseResultModel } from '../models/ResponseResultModel';

import { Task } from '../entities/Task';

export default class TaskController {
    async getTasksByCategory(request: Request, response: Response): Promise<Response<ResponseResultModel>> {
        try {
            const { categoryId } = request.query;
            const getTasks = new GetTasksCommand();
            getTasks.execute(categoryId).then((tasks: Array<Task>) => {
                if (tasks.length > 0)
                    response.status(200).send({
                        success: true,
                        message: null,
                        data: tasks
                    });
                else
                    response.status(404).send({
                        success: true,
                        message: 'No one Task found.',
                        data: null
                    });
            }).catch(err => {
                return response.status(400).json({
                    success: false,
                    message: err.message || 'An Error occurred while getting Tasks.',
                    data: null
                });
            });

        } catch (err) {
            return response.status(400).json({
                success: false,
                message: err.message || 'Unexpected error',
                data: null
            });
        }
    }

    async setTask(request: Request, response: Response): Promise<Response<ResponseResultModel>> {
        try {
            const setTaskModel: SetTaskModel = request.body;
            const setTask = new SetTaskCommand();
            setTask.execute(setTaskModel).then((result: number) => {
                if (result > 0)
                    response.status(201).send({
                        success: true,
                        message: 'Tasks created successfully!',
                        data: null
                    });
            }).catch(err => {
                return response.status(400).json({
                    success: false,
                    message: err.message || 'An Error occurred while creating Task.',
                    data: null
                });
            });
        } catch (err) {
            return response.status(400).json({
                success: false,
                message: err.message || 'Unexpected error',
                data: null
            });
        }
    }

    async changeStatus(request: Request, response: Response): Promise<Response<ResponseResultModel>> {
        try {
            const setTaskStatusModel: SetTaskStatusModel = request.body;
            const setTaskStatus = new SetTaskStatusCommand();
            setTaskStatus.execute(setTaskStatusModel).then((result: number) => {
                if (result > 0) {
                    return response.status(200).send({
                        success: true,
                        message: 'task updated successfully!',
                        data: null
                    });
                } else {
                    return response.status(404).send({
                        success: false,
                        message: 'Task not found',
                        data: null
                    });
                }
            }).catch(err => {
                return response.status(400).json({
                    success: false,
                    message: err || 'An Error occurred while updating task status.',
                    data: null
                });
            });

        } catch (err) {
            return response.status(400).json({
                success: false,
                message: err.message || 'Unexpected error',
                data: null
            });
        }
    }
}