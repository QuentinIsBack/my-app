import { Timestamp } from "firebase/firestore";

interface IAssetsIMG {
    picture1: string
    picture2: string
    picture3: string
}
interface IAssets {
    pictures: IAssetsIMG
    vod: string
}

interface IAboutHost {
    rooms: number | undefined;
    bedrooms: number | undefined;
    bathroom: number | undefined;
    surface: number | undefined;
    floor: number | undefined

    ges: string | undefined
    dpe: string | undefined
}

export default class HostNewDatas {  

    title: string;
    description: string | undefined;
    id: string | undefined;
    structure: string | undefined;
    property: string | undefined;
    privacy: string | undefined;
    price: number;
    taxes: number;
    rooms: number | undefined;
    bedrooms: number | undefined;
    bathroom: number | undefined;
    surface: number | undefined;
    agency: string | undefined
    amenities: string[] | undefined
    assets: IAssets | undefined
    ges: string | undefined
    dpe: string | undefined
    floor: number | undefined
    location: number[] | undefined
    date: Timestamp | undefined
    
    constructor( 
        title?: string, 
        description?: string, 
        id?: string, 
        structure?: string, 
        property?: string, 
        privacy?: string, 
        price?: number, 
        taxes?: number, 
        rooms?: number, 
        bedrooms?: number, 
        bathroom?: number,
        surface?: number,
        agency?: string, 
        amenities?: string[], 
        assets?: IAssets, 
        ges?: string, 
        dpe?: string, 
        floor?: number, 
        location?: number[], 
        date?: Timestamp
        ){
        this.title = title ?? "";
        this.description = description;
        this.id = id;
        this.structure = structure;
        this.property = property;
        this.privacy = privacy;
        this.price = price ?? 0;
        this.taxes = taxes ?? 0;
        this.rooms = rooms;
        this.bedrooms = bedrooms;
        this.bathroom = bathroom;
        this.surface = surface;
        this.agency = agency;
        this.amenities = amenities;
        this.assets = assets;
        this.ges = ges;
        this.dpe = dpe;
        this.floor = floor;
        this.location = location;
        this.date = date;
    }

}