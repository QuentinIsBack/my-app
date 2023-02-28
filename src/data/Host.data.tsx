import { Timestamp } from "firebase/firestore";
import { NavigateFunction } from "react-router-dom";

export default class HostDatas {  

    title: string | undefined;
    id: string | undefined;
    structure: string | undefined;
    propertytype: string | undefined;
    privacytype: string | undefined;
    
    date: Timestamp | undefined

    setTitle = (newData: string) => { this.title = newData }
    getTitle = () => { return this.title }

    setId = (newData: string) => { this.id = newData }
    getId = () => { return this.id }

    setStructure = (newData: string) => { this.structure = newData }
    getStructure = () => { return this.structure }

    setPropertyType = (newData: string) => { this.propertytype = newData }
    getPropertyType = () => { return this.propertytype }

    setPrivacyType = (newData: string) => { this.privacytype = newData }
    getPrivacyType = () => { return this.privacytype }

    setDate = (newData: Timestamp) => { this.date = newData }
    getDate = () => { return this.date }

    getForgetInformations = (navigate: NavigateFunction) => {
        if (this.structure == undefined) {
            return navigate(`/agency/become-a-host/${this.getId()}/structure`);
        }
        if (this.propertytype == undefined) {
            return navigate(`/agency/become-a-host/${this.getId()}/property-type`);
        }
        if (this.privacytype == undefined) {
            return navigate(`/agency/become-a-host/${this.getId()}/privacy-type`);
        }
    }

}