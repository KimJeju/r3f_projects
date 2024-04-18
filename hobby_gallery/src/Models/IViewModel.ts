export interface IViewModel {
    title : string;
    imagePath : string | undefined;
}

export class View implements IViewModel {
    title : string
    imagePath : string | undefined
    constructor(title:string, imagePath : string | undefined){
        this.title = title;
        this.imagePath = imagePath;
    }
}