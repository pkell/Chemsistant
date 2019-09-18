import { ITask } from './task-detail/task.model';

export interface ICompound {
    id: string;
    name: string;
    code: string;
    selectivityConditions: string;
    temperature: number;
    formula: string;
    pinned: boolean;
    notes: string;
}

export class Compound {
    id: string;
    name: string;
    code: string;
    selectivityConditions: string;
    temperature: number;
    formula: string;
    pinned: boolean;
    notes: string;
}
