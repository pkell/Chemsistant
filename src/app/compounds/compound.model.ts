import { ITask } from './task-detail/task.model';

export interface ICompound {
    id: number;
    name: string;
    code: string;
    selectivityConditions: string;
    temperature: number;
    formula: string;
    pinned: boolean;
    notes: string;
}

export class Compound {
    id: number;
    name: string;
    code: string;
    selectivityConditions: string;
    temperature: number;
    formula: string;
    pinned: boolean;
    notes: string;
}
