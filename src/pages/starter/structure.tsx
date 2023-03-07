import { PageBuilder } from "../../components/pagebuilder/pagebuilder";

import { useNavigate } from "react-router-dom";
import { SBthemes, StarterBuilder } from "../../components/pagebuilder/starterbuilder";
import { useContext, useEffect, useState } from "react";
import { AgencyContext } from "../../contexts/AgencyContext";
import Icon from "../../components/icon/icons";
import { UserContext } from "../../contexts/UserContext";
import { ChooseButton } from "../../components/button/ChooseButton";
import CustomDataServices, { IStructure } from "../../services/CustomData.services";

type TypeSelected = {
    title: string,
    id: string,
    description: string
}
function App() {

    const { AgencyData } = useContext(AgencyContext)
    const { UserData } = useContext(UserContext)
    const [show, setShow] = useState(false)

    const navigate = useNavigate();

    const [list, setList] = useState<any[]>()
    const [selected, setSelected] = useState<TypeSelected>()

    useEffect(()=>{
        async function fetchData(){
            await CustomDataServices.getAll(IStructure.PropertyType)
                .then((querySnapshot) => setList(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
                setShow(true)
        }
        fetchData()
    }, [])

    return (
        <PageBuilder title="Starter" show={true}>
            <>
                <StarterBuilder theme={SBthemes.home} footer={true} title={"Parmi les propositions suivantes, laquelle décrit le mieux votre logement ?"}>
                    <>
                            <div className="flex flex-col justify-start items-center w-full  h-full py-20">
                                <div className="w-35rem max-w-35rem flex flex-col h-full justify-center">

                                <div className="w-full text-left font-semibold text-3xl text-supergray"></div>
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