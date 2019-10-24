export interface IImage {
    parentId: string;
    uid: string;
    url: string;
}

export class Image implements IImage {
    parentId: string;
    uid: string;
    url: string;
}
