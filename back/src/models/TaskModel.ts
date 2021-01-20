export class SetTaskModel {
    public description: string;
    public deadLine: string;
    public categoryId: number;
    public done: boolean = false;
}

export class SetTaskStatusModel {
    public taskId: number;
    public done: boolean;
}