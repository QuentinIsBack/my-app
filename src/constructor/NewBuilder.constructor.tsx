import NewHost, { IAssets, IBasic } from "../data/NewHost.data";

export const NewBuilder = (data: any, id: string) => {
    return new NewHost(
        data.title ?? "SansNom",
        data.description ?? "",
        initBasic({
            rooms: data?.basic?.rooms ?? 0,
            structure: data?.basic?.structure ?? "",
            privacy: data?.basic?.privacy ?? "",
            property: data?.basic?.property ?? "",
            bedrooms: data?.basic?.bedrooms ?? 0,
            bathroom: data?.basic?.bathroom ?? 0,
            surface: data?.basic?.surface ?? 0,
            floor: data?.basic?.floor ?? 0,
            ges: data?.basic?.ges ?? "",
            dpe: data?.basic?.dpe ?? "",
            price: data?.basic?.price ?? 0,
            taxes: data?.basic?.taxes ?? 0,
            location: data?.basic?.location ?? [2.333333, 48.866667],
            superinfos: data?.basic?.superinfos ?? [],         
            conditions: data?.basic?.conditions ?? [],      
            amenities: data?.basic?.amenities ?? []            
        }),
        initAssets({
            pictures: {
                picture1: data?.assets?.pictures?.picture1 ?? "",
                picture2: data?.assets?.pictures?.picture2 ?? "",
                picture3: data?.assets?.pictures?.picture3 ?? "",
            },
            vod: data?.assets?.vod ?? "",
        })
    );
}

export function initBasic(options?: Partial<IBasic>): IBasic {
    const defaults = {
        rooms: 0,
        structure: "",
        privacy: "",
        property: "",
        bedrooms: 0,
        bathroom: 0,
        surface: 0,
        floor: 0,
        ges: "",
        dpe: "",
        price: 0,
        taxes: 0,
        location: [2.333333, 48.866667],
        superinfos: [],
        conditions: [],
        amenities: []
    };

    return {
        ...defaults,
        ...options
    };
}

export function initAssets(options?: Partial<IAssets>): IAssets {
    const defaults = {
        pictures: {
            picture1: "",
            picture2: "",
            picture3: ""
        },
        vod: ""
    };

    return {
        ...defaults,
        ...options
    };
}