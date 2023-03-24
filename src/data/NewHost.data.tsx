import { initBasic } from "../constructor/NewBuilder.constructor";

export default class NewHost {  

    title: string;
    description: string;
    basic: IBasic
    
    constructor();
    constructor( title: string, description: string, basic: IBasic );
    constructor( title?: string, description?: string, basic?: IBasic ){
        this.title = title ?? "";
        this.description = description ?? "";
        this.basic = basic ?? initBasic();
    }
}

export interface IBasic {
    rooms: number;
    bedrooms: number;
    bathroom: number;
    surface: number;
    floor: number;
    ges: string;
    dpe: string;
    price: number;
    taxes: number;
    location: number[]
}