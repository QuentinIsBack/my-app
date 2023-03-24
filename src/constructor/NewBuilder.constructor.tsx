import NewHost, { IBasic } from "../data/NewHost.data";

export const NewBuilder = (data: any, id: string) => {
    return new NewHost(
        data.title ?? "SansNom",
        "Aucunes descriptions renseigné .. :(",
        initBasic({
            rooms: data?.basic?.rooms ?? 0,
            bedrooms: data?.basic?.bedrooms ?? 0,
            bathroom: data?.basic?.bathroom ?? 0,
            surface: data?.basic?.surface ?? 0,
            floor: data?.basic?.floor ?? 0,
            location: data?.basic?.location ?? [2.333333, 48.866667],
        })
    );
}

export function initBasic(options?: Partial<IBasic>): IBasic {
    const defaults = {
        rooms: 0,
        bedrooms: 0,
        bathroom: 0,
        surface: 0,
        floor: 0,
        ges: "d",
        dpe: "d",
        price: 0,
        taxes: 0,
        location: [2.333333, 48.866667]
    };

    return {
        ...defaults,
        ...options
    };
}