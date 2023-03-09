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
        navigate(`/${id}/property-type`)
    }

    return (
        <PageBuilder title="Starter" show={true}>
            <>
                <StarterBuilder btnClick={test} buttonNext={ selected ? SBbuttons.allow : SBbuttons.blocked } theme={SBthemes.home} footer={true} title={"Quel type de logement allez-vous proposer ?"}>
                    <>
                        <div className="flex flex-col justify-start items-center w-full h-full py-20">
                            <div className="w-35rem max-w-35rem flex flex-col space-y-14 h-full justify-center">

                                <div className="flex flex-col space-y-6">
                                    <div className="w-full text-left font-semibold text-xl text-supergray">Indiquez aux locataires les équipements du logement</div>
                                    <ChooseButton style="grid grid-cols-3 gap-8" list={list} selected={selected} setSelected={setSelected} />  
                                </div>

                                <div className="flex flex-col space-y-6">
                                    <div className="w-full text-left font-semibold text-xl text-supergray">Possédez-vous des équipements hors du commun ?</div>
                                    <ChooseButton style="grid grid-cols-3 gap-8" list={list} selected={selected} setSelected={setSelected} />  
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