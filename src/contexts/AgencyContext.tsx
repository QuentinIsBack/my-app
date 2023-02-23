import { doc, onSnapshot } from "firebase/firestore";
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
            onSnapshot(doc(db, "agencies", UserData.agency), (doc) => {

                AgencyData.setTitle(doc.data()?.title)
                AgencyData.setDescription(doc.data()?.description)
                
                setLoadingData(false)
            });
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
