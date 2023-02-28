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
// Import Authentificated

import AgencyDatas from "../data/Agency.data";
import HostDatas from "../data/Host.data";
import UserDatas from "../data/User.data";

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
        if (UserData.getAgency()) {


            const fetchData = async () => {

                try {

                    onSnapshot(doc(db, "agencies", UserData.getAgency()), async (doc) => {

                        const newData = new AgencyDatas();

                        newData.setUID(doc.id)
                        newData.setTitle(doc.data()?.title);
                        newData.setDescription(doc.data()?.description);


                        // Get tous les utilisateurs
                        await UserDataServices.getAll(where("agency", "==", doc.id))
                            .then((querySnapshot) => {
                                const tableau: UserDatas[] = []
                                querySnapshot.docs.map(async (doc) => {
                                    const newData = new UserDatas();
                                    newData.setUID(doc.data()?.uid)
                                    newData.setFirstname(doc.data()?.firstname)
                                    newData.setLastname(doc.data()?.lastname)
                                    newData.setEmail(doc.data()?.email)
                                    newData.setAgency(doc.data()?.agency)

                                    tableau.push(newData)
                                })
                                newData.setMembers(tableau)
                            });

                        // Get tous les logements
                        await HostDataServices.getAll(where("agency", "==",doc.id))
                            .then((querySnapshot) => {
                                const hosts: HostDatas[] = []
                                querySnapshot.docs.map(async (docH) => {
                                    const newHost = new HostDatas();
                                    newHost.setTitle(docH.data().title)
                                    newHost.setDate(docH.data().createdAt)
                                    newHost.setId(docH.id)
                                    hosts.push(newHost)

                                })
                                newData.setHosts(hosts)
                            })

                        newData.setOwner(doc.data()?.owner);
                        newData.setPermissions(doc.data()?.permissions);

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