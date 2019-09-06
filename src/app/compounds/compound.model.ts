import { ITask } from './task-detail/task.model';

export interface ICompound {
    name: string;
    code: string;
    selectivityConditions: string;
    temperature: number;
    formula: string;
    pinned: boolean;
    notes: string;
}

export class Compound {
    name: string;
    code: string;
    selectivityConditions: string;
    temperature: number;
    formula: string;
    pinned: boolean;
    notes: string;
}
