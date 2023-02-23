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
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, UserCredential } from "firebase/auth"
import { auth, db } from "../firebase.config"
import UserDataServices from "../services/UserData.services";
import UserDatas from "../data/User.data";
import { doc, onSnapshot } from "firebase/firestore";

interface signin {
    email: string, 
    pwd: string
}
type UsersId = {
    currentUser: undefined;
    setCurrentUser?: Dispatch<SetStateAction<object>>;

    UserData: UserDatas;
    setUserData?: Dispatch<SetStateAction<any>>;

    signIn: any;
    signUp: any
};

export const UserContext = createContext<UsersId>({} as UsersId);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
    //const [user, setUser] = useState(Object);

    const signUp = (email: string, pwd: string) => createUserWithEmailAndPassword(auth, email, pwd)
    const signIn = (email: string, pwd: string) => signInWithEmailAndPassword(auth, email, pwd)

    const [UserData, setUserData] = useState(new UserDatas());
    const [currentUser, setCurrentUser] = useState(Object);
    const [loadingData, setLoadingData] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser)
            if (currentUser) {
                onSnapshot(doc(db, "users", currentUser.uid), (doc) => {

                    UserData.setUID(doc.data()?.uid)
                    UserData.setFirstname(doc.data()?.firstname)
                    UserData.setLastname(doc.data()?.lastname)
                    UserData.setEmail(doc.data()?.email)
                    UserData.setAgency(doc.data()?.agency)
                    
                    setLoadingData(false)
                })
            } else {
                setLoadingData(false)
            }
        })
        return unsubscribe;
    }, [])

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser, UserData, setUserData, signIn, signUp }}>
            {!loadingData && children}
        </UserContext.Provider>
    );
};

export const useCharactersContext = () => useContext(UserContext);
