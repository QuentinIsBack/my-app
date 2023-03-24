import { Timestamp } from "firebase/firestore";

export default class HostNewDatas {  

    title: string | undefined;
    description: string | undefined;
    id: string | undefined;
    structure: string | undefined;
    property: string | undefined;
    privacy: string | undefined;
    price: number | undefined;
    rooms: number | undefined;
    bedrooms: number | undefined;
    bathroom: number | undefined;
    surface: number | undefined;
    agency: string | undefined
    amenities: string[] | undefined
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
        rooms?: number, 
        bedrooms?: number, 
        bathroom?: number,
        surface?: number,
        agency?: string, 
        amenities?: string[] | undefined, 
        ges?: string | undefined, 
        dpe?: string | undefined, 
        floor?: number | undefined, 
        location?: number[] | undefined, 
        date?: Timestamp | undefined 
        ){
        this.title = title;
        this.description = description;
        this.id = id;
        this.structure = structure;
        this.property = property;
        this.privacy = privacy;
        this.price = price;
        this.rooms = rooms;
        this.bedrooms = bedrooms;
        this.bathroom = bathroom;
        this.surface = surface;
        this.agency = agency;
        this.amenities = amenities;
        this.ges = ges;
        this.dpe = dpe;
        this.floor = floor;
        this.location = location;
        this.date = date;
    }

}