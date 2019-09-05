export interface ITask {
    id: number;
    compoundId: number;
    name: string;
    imageUrls: string[];
    data: string;
}

export class Task implements ITask {
    id: number;
    compoundId: number;
    name: string;
    imageUrls: string[];
    data: string;
}
