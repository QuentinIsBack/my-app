import HostNewDatas from "../data/HostNew.data";

export const HostBuilderNew = (data: any, id: string) => {
    return new HostNewDatas(
        data.title,
        data.description,
        id,
        data.structure,
        data.property,
        data.privacy,
        data.price,
        data.rooms,
        data.bedrooms,
        data.bathroom,
        data.surface,
        data.agency,
        data.amenities,
        data.ges,
        data.dpe,
        data.floor,
        data.location,
        data.date
    );
}