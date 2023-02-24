import { db } from "../firebase.config";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, query, FieldValue } from "firebase/firestore";

const table = "agencies"

class UserDataServices {

    add = async (news: FieldValue) => {
        return await addDoc(collection(db, table), news);
    };

    update = async (id: string, update: { [x: string]: any; }) => {
        return await updateDoc(doc(db, table, id), update);
    };

    delete = async (id: string) => {
        return await deleteDoc(doc(db, table, id));
    };

    getAll = async (...other: any[]) => {
        return await getDocs(query(collection(db, table), ...other));
    };

    get = async (id: string) => {
        return await getDoc(doc(db, table, id))
    };

    hasPermission = async (id: string, uid: string, permissions: string) => {
        const datas = await getDoc(doc(db, table, id))
        return datas.data()?.permissions.permissions.includes(uid)
    }

}


export default new UserDataServices();