import { Timestamp } from "firebase/firestore";
import { NavigateFunction } from "react-router-dom";

class IStructure {
    id: string | undefined
    title: string | undefined
    icon: string | undefined
}

class IPropertyType {
    id: string | undefined
    title: string | undefined
    description: string | undefined
}

class IPrivacyType {
    id: string | undefined
    title: string | undefined
    description: string | undefined
}

export default class HostDatas {  

    title: string | undefined;
    id: string | undefined;
    structure: IStructure | undefined;
    propertytype: IPropertyType | undefined;
    privacytype: IPrivacyType | undefined;
    price: number | undefined;

    agency: string | undefined

    date: Timestamp | undefined

    setTitle = (newData: string) => { this.title = newData }
    getTitle = () => { return this.title }

    setId = (newData: string) => { this.id = newData }
    getId = () => { return this.id }

    setStructure = (newData: IStructure) => { this.structure = newData }
    getStructure = () => { return this.structure }

    setPropertyType = (newData: IPropertyType) => { this.propertytype = newData }
    getPropertyType = () => { return this.propertytype }

    setPrivacyType = (newData: IPrivacyType) => { this.privacytype = newData }
    getPrivacyType = () => { return this.privacytype }

    setPrice = (newData: number) => { this.price = newData }
    getPrice = () => { return this.price }

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
        return navigate(`/starter/${this.getId()}/structure`);
    }

}