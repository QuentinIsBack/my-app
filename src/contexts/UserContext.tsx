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
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase.config"
import UserDataServices from "../services/UserData.services";
import UserDatas from "../data/User.data";

type UsersId = {
    currentUser: undefined;
    setCurrentUser?: Dispatch<SetStateAction<object>>;

    UserData: UserDatas;
    setUserData?: Dispatch<SetStateAction<any>>;
};

export const UserContext = createContext<UsersId>({} as UsersId);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
    //const [user, setUser] = useState(Object);
    const [UserData, setUserData] = useState(new UserDatas());
    const [currentUser, setCurrentUser] = useState(Object);
    const [loadingData, setLoadingData] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser)
            if (currentUser) {
                UserDataServices.get(currentUser.uid).then((doc)=> {

                    UserData.setUID(doc.data()?.uid)
                    UserData.setFirstname(doc.data()?.firstname)
                    UserData.setLastname(doc.data()?.lastname)
                    UserData.setEmail(doc.data()?.email)
                    
                    setLoadingData(false)
                })
            } else {
                setLoadingData(false)
            }
        })
        return unsubscribe;
    }, [])

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser, UserData, setUserData }}>
            {!loadingData && children}
        </UserContext.Provider>
    );
};

export const useCharactersContext = () => useContext(UserContext);
