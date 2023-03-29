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
import { useNavigate } from "react-router-dom";
import { NewBuilder } from "../constructor/NewUser.constructor";
// Import Authentificated

import AgencyDatas from "../data/Agency.data";
import HostDatas from "../data/Host.data";
import NewUser from "../data/NewUser.data";

import { db } from "../firebase.config";
import AgencyDataServices from "../services/AgencyData.services";
import HostDataServices from "../services/HostData.services";
import UserDataServices from "../services/UserData.services";
import { UserContext } from "./UserContext";

type AgencyId = {
    AgencyData: AgencyDatas;
    setAgencyData?: Dispatch<SetStateAction<any>>;
};

export const AgencyContext = createContext<AgencyId>({} as AgencyId);

export const AgencyContextProvider = ({ children }: { children: ReactNode }) => {

    const [AgencyData, setAgencyData] = useState(new AgencyDatas());
    const [loadingData, setLoadingData] = useState(true);
    const { currentUser, UserData } = useContext(UserContext)

    useEffect(() => {
        if (UserData.agency) {


            const fetchData = async () => {

                try {

                    onSnapshot(doc(db, "agencies", UserData.agency as string), async (docR) => {

                        const newData = new AgencyDatas();

                        newData.setUID(docR.id)
                        newData.setTitle(docR.data()?.title);
                        newData.setDescription(docR.data()?.description);


                        // Get tous les utilisateurs
                        await UserDataServices.getAll(where("agency", "==", docR.id))
                            .then((querySnapshot) => {
                                const tableau: NewUser[] = []
                                querySnapshot.docs.map(async (doc) => {
                                    const newData = NewBuilder(doc.data(), doc.id)
                                    tableau.push(newData)
                                })
                                newData.setMembers(tableau)
                            });

                        // Get tous les logements
                        await HostDataServices.getAll(where("agency", "==",docR.id))
                            .then((querySnapshot) => {
                                const hosts: HostDatas[] = []
                                querySnapshot.docs.map(async (docH) => {
                                    const newHost = new HostDatas();
                                    newHost.setTitle(docH.data().title)
                                    newHost.setDate(docH.data().createdAt)
                                    newHost.setStructure(docH.data().structure)
                                    newHost.setPropertyType(docH.data().property_type)
                                    newHost.setPrivacyType(docH.data().privacy_type)
                                    newHost.setId(docH.id)
                                    hosts.push(newHost)
                                })
                                newData.setHosts(hosts)
                            })

                        newData.setOwner(docR.data()?.owner);
                        newData.setPermissions(docR.data()?.permissions);

                        console.log(newData)

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