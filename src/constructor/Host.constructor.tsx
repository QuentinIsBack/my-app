import { DocumentSnapshot } from "firebase/firestore";
import HostDatas from "../data/Host.data";

export const HostBuilder = (data: any) => {
    const newHost = new HostDatas();
    newHost.setTitle(data?.title)
    newHost.setDescription(data?.description)
    newHost.setDate(data?.createdAt)
    newHost.setStructure(data?.structure)
    newHost.setPropertyType(data?.property)
    newHost.setPrivacyType(data?.privacy)
    newHost.setPrice(data?.price)
    newHost.setRooms(data?.rooms)
    newHost.setBedrooms(data?.bedrooms)
    newHost.setBathroom(data?.bathroom)
    newHost.setId(data.id)
    return newHost
}