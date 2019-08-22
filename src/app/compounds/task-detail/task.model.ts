export interface ITask {
    id: number;
    title: string;
    imageUrls: string[];
    data: string;
}

export class Task implements ITask {
    id: number;
    title: string;
    imageUrls: string[];
    data: string;
}
