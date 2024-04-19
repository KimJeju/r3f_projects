export interface IViewModel {
    id : number | undefined;
    title : string;
    imagePath : string | undefined;
}

export class View implements IViewModel {
    id : number | undefined;
    title : string
    imagePath : string | undefined
    constructor(id : number | undefined, title:string, imagePath : string | undefined){
        this.id = id;
        this.title = title;
        this.imagePath = imagePath;
    }
}

export const ViewList : View[] = [
    new View(1,"hello",'./imgs/test.jpg'),
    new View(2,"mock1",""),
    new View(3,"mock2",""),
    new View(4,"mock3",""),
    new View(5,"mock4",""),
    new View(6,"mock5",""),
    new View(7,"mock6",""),
    new View(8,"mock7",""),
    new View(9,"mock8",""),
]