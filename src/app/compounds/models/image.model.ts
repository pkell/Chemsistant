export interface IImage {
    id: string;
    parentId: string;
    uid: string;
    url: string;
}

export class Image implements IImage {
    id: string;
    parentId: string;
    uid: string;
    url: string;
}
