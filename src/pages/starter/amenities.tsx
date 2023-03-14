import { PageBuilder } from "../../components/pagebuilder/pagebuilder";

import { useNavigate, useParams } from "react-router-dom";
import { SBthemes, StarterBuilder, SBbuttons } from "../../components/pagebuilder/starterbuilder";
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
            await CustomDataServices.getAll(IStructure.Amenities)
                .then((querySnapshot) => setList(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
                setShow(true)
        }
        fetchData()
    }, [])

    const test = () => { 
        console.log("ok")
        //navigate(`/${id}/property-type`)
        navigate(`/${id}/title`)
    }


    return (
        <PageBuilder title="Starter" show={show}>
            <>
                <StarterBuilder progress={30} btnClick={test} buttonNext={ selected ? SBbuttons.allow : SBbuttons.blocked } theme={SBthemes.home} footer={true} title={"Indiquez aux locataires quels sont les équipements de votre logement"}>
                    <>
                        <div className="flex flex-col justify-start items-center w-full h-full py-20 overflow-scroll">
                            <div className="w-35rem max-w-35rem flex flex-col space-y-14 justify-start">

                                <div className="flex flex-col space-y-6">
                                    <div className="w-full text-left font-semibold text-2xl text-supergray">Indiquez aux locataires les équipements du logement</div>
                                    <ChooseButton style="grid grid-cols-3 gap-6" align="flex-col justify-center text-center space-y-4" list={list} selected={selected} setSelected={setSelected} />  
                                </div>

                                <div className="flex flex-col space-y-6">
                                    <div className="w-full text-left font-semibold text-2xl text-supergray">Qu'en est-il de ces équipements préférés des voyageurs ?</div>
                                    <ChooseButton style="grid grid-cols-3 gap-6" align="flex-col justify-center text-center space-y-4" list={list} selected={selected} setSelected={setSelected} />  
                                </div>

                            </div>
                        </div>
                    </>
                </StarterBuilder>
            </>
        </PageBuilder>
    );
}

export default App;