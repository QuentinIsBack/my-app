import { db } from "../firebase.config";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, query, FieldValue } from "firebase/firestore";


export const IStructure = {
    Structure: "structure",
    PropertyType: "property-type",
    PrivacyType: "privacy-type",
    Amenities: "amenities"
}

class CustomDataServices {

    add = async (table: string, news: FieldValue) => {
        return await addDoc(collection(db, table), news);
    };

    update = async (table: string, id: string, update: { [x: string]: any; }) => {
        return await updateDoc(doc(db, table, id), update);
    };

    delete = async (table: string, id: string) => {
        return await deleteDoc(doc(db, table, id));
    };

    getAll = async (table: string, ...other: any[]) => {
        console.log("FIREBASE !!")
        return await getDocs(query(collection(db, table), ...other));
    };

    get = async (table: string, id: string) => {
        console.log("FIREBASE !!")
        return await getDoc(doc(db, table, id))
    };

    hasPermission = async (table: string, id: string, uid: string, permissions: string) => {
        const datas = await getDoc(doc(db, table, id))
        return datas.data()?.permissions.permissions.includes(uid)
    }
}


export default new CustomDataServices();