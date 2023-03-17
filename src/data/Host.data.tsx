import { Timestamp } from "firebase/firestore";
import { NavigateFunction } from "react-router-dom";

export default class HostDatas {  

    title: string | undefined;
    description: string | undefined;
    id: string | undefined;
    structure: string | undefined;
    propertytype: string | undefined;
    privacytype: string | undefined;
    price: number | undefined;

    rooms: number | undefined;
    bedrooms: number | undefined;
    bathroom: number | undefined;

    agency: string | undefined

    date: Timestamp | undefined

    setTitle = (newData: string) => { this.title = newData }
    getTitle = () => { return this.title }

    setDescription = (newData: string) => { this.description = newData }
    getDescription = () => { return this.description }

    setId = (newData: string) => { this.id = newData }
    getId = () => { return this.id }

    setStructure = (newData: string) => { this.structure = newData }
    getStructure = () => { return this.structure }

    setPropertyType = (newData: string) => { this.propertytype = newData }
    getPropertyType = () => { return this.propertytype }

    setPrivacyType = (newData: string) => { this.privacytype = newData }
    getPrivacyType = () => { return this.privacytype }

    setPrice = (newData: number) => { this.price = newData }
    getPrice = () => { return this.price }

    setRooms = (newData: number) => { this.rooms = newData }
    getRooms = () => { return this.rooms }
    
    setBedrooms = (newData: number) => { this.bedrooms = newData }
    getBedrooms = () => { return this.bedrooms }

    setBathroom = (newData: number) => { this.bathroom = newData }
    getBathroom = () => { return this.bathroom }

    setAgency = (newData: string) => { this.agency = newData }
    getAgency = () => { return this.agency }

    setDate = (newData: Timestamp) => { this.date = newData }
    getDate = () => { return this.date }

    getForgetInformations = (navigate: NavigateFunction) => {
        /*if (this.structure == undefined) {
            return navigate(`/starter/${this.getId()}/structure`);
        }
        if (this.propertytype == undefined) {
            return navigate(`/starter/${this.getId()}/property-type`);
        }
        if (this.privacytype == undefined) {
            return navigate(`/starter/${this.getId()}/privacy-type`);
        }*/
        return navigate(`/${this.getId()}/overview`);
    }

}