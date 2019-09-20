
export interface ICompound {
    id: string;
    name: string;
    code: string;
    selectivityConditions: string;
    temperature: number;
    formula: string;
    pinned: boolean;
    notes: string;
    uid: string;
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
    uid: string;
}
