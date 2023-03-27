import { initAssets, initBasic } from "../constructor/NewBuilder.constructor";

export default class NewHost {  

    title: string;
    description: string;
    basic: IBasic
    assets: IAssets
    
    constructor();
    constructor( title: string, description: string, basic: IBasic, assets: IAssets );
    constructor( title?: string, description?: string, basic?: IBasic, assets?: IAssets ){
        this.title = title ?? "";
        this.description = description ?? "";
        this.basic = basic ?? initBasic();
        this.assets = assets ?? initAssets();
    }
}

interface IAssetsIMG {
    picture1: string
    picture2: string
    picture3: string
}
export interface IAssets {
    pictures: IAssetsIMG
    vod: string
}

export interface IBasic {
    rooms: number;
    structure: string;
    privacy: string;
    property: string;
    bedrooms: number;
    bathroom: number;
    surface: number;
    floor: number;
    ges: string;
    dpe: string;
    price: number;
    taxes: number;
    location: number[];
    superinfos: string[];
    conditions: string[];
    amenities: string[];
}