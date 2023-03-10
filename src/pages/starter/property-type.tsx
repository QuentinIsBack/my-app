import { PageBuilder } from "../../components/pagebuilder/pagebuilder";

import { useNavigate, useParams } from "react-router-dom";
import { SBbuttons, SBthemes, StarterBuilder } from "../../components/pagebuilder/starterbuilder";
import { useContext, useEffect, useState } from "react";
import { AgencyContext } from "../../contexts/AgencyContext";
import Icon from "../../components/icon/icons";
import { UserContext } from "../../contexts/UserContext";
import { ChooseButton } from "../../components/button/ChooseButton";
import CustomDataServices, { IStructure } from "../../services/CustomData.services";
import { orderBy } from "firebase/firestore";

type TypeSelected = {
    title: string,
    id: string,
    description: string
}
function App() {

    const { AgencyData } = useContext(AgencyContext)
    const { UserData } = useContext(UserContext)
    const [show, setShow] = useState(false)
    const { id } = useParams();

    const navigate = useNavigate();

    const [list, setList] = useState<any[]>()
    const [selected, setSelected] = useState<TypeSelected>()

    useEffect(()=>{
        async function fetchData(){
            await CustomDataServices.getAll(IStructure.PropertyType, orderBy('sort'))
                .then((querySnapshot) => setList(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
                setShow(true)
        }
        fetchData()
    }, [])

    const test = () => { 
        console.log("ok")
        //navigate(`/${id}/property-type`)
        navigate(`/${id}/amenities`)
    }

    return (
        <PageBuilder title="Starter" show={true}>
            <>
                <StarterBuilder btnClick={test} buttonNext={ selected ? SBbuttons.allow : SBbuttons.blocked } theme={SBthemes.home} footer={true} title={"Parmi les propositions suivantes, laquelle décrit le mieux votre logement ?"}>
                    <>
                        <div className="flex flex-col justify-start items-center w-full h-full py-20">
                            <div className="w-35rem max-w-35rem flex flex-col h-full justify-center">
                                <ChooseButton list={list} selected={selected} setSelected={setSelected} />  
                            </div>
                        </div>
                    </>
                </StarterBuilder>
            </>
        </PageBuilder>
    );
}

export default App;