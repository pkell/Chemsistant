export interface ITask {
    compoundId: number;
    id: string;
    name: string;
    data: string;
    uid: string;
}

export class Task implements ITask {
    compoundId: number;
    id: string;
    name: string;
    data: string;
    uid: string;
}
