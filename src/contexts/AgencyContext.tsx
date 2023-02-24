import { doc, onSnapshot, where } from "firebase/firestore";
import React, {
    useState,
    createContext,
    useContext,
    Dispatch,
    SetStateAction,
    ReactNode,
    useEffect
} from "react";
// Import Authentificated

import AgencyDatas from "../data/Agency.data";

import { db } from "../firebase.config";
import AgencyDataServices from "../services/AgencyData.services";
import UserDataServices from "../services/UserData.services";
import { UserContext } from "./UserContext";

type AgencyId = {
    AgencyData: AgencyDatas;
    setAgencyData?: Dispatch<SetStateAction<any>>;
};

export const AgencyContext = createContext<AgencyId>({} as AgencyId);

export const AgencyContextProvider = ({ children }: { children: ReactNode }) => {

    const [ AgencyData, setAgencyData ] = useState(new AgencyDatas());
    const [ loadingData, setLoadingData ] = useState(true);
    const { currentUser, UserData } = useContext(UserContext)

    useEffect(() => {
        if(UserData.getAgency()) {

 
            const fetchData = async () => {

                try {

                    onSnapshot(doc(db, "agencies", UserData.getAgency()), async (doc) => {

                        const newData = new AgencyDatas();

                        newData.setUID(doc.id)
                        newData.setTitle(doc.data()?.title);
                        newData.setDescription(doc.data()?.description);

                        await UserDataServices.getAll(where("agency", "==", doc.id)).then((querySnapshot) => {
                            newData.setMembers(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                        })
                        
                        setAgencyData(newData)
                    }) 

                    setLoadingData(false)

                } catch (err) {
                    console.log(err)
                }

            }
            fetchData();


        } else {
            setLoadingData(false)
        }
    }, [])

    return (
        <AgencyContext.Provider value={{ AgencyData, setAgencyData }}>
            {!loadingData && children}
        </AgencyContext.Provider>
    );
};

export const useCharactersContext = () => useContext(AgencyContext);
