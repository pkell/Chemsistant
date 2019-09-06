export interface ITask {
    id: number;
    compoundId: number;
    name: string;
    data: string;
}

export class Task implements ITask {
    id: number;
    compoundId: number;
    name: string;
    data: string;
}
