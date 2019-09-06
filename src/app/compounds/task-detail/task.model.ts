export interface ITask {
    compoundId: number;
    name: string;
    data: string;
}

export class Task implements ITask {
    compoundId: number;
    name: string;
    data: string;
}
