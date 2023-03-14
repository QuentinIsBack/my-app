import { PageBuilder } from "../../components/pagebuilder/pagebuilder";

import { useNavigate, useParams } from "react-router-dom";
import { SBthemes, StarterBuilder, SBbuttons } from "../../components/pagebuilder/starterbuilder";
import { useContext, useEffect, useState } from "react";
import { AgencyContext } from "../../contexts/AgencyContext";
import { UserContext } from "../../contexts/UserContext";
import { ChooseButton } from "../../components/button/ChooseButton";
import CustomDataServices, { IStructure } from "../../services/CustomData.services";
import HostDataServices from "../../services/HostData.services";
import { de } from "date-fns/locale";

type TypeSelected = {
    title: string,
    id: string,
    description: string
}
function App() {

    const [show, setShow] = useState(false)
    const { id } = useParams();

    const navigate = useNavigate();


    const [description, setDescription] = useState<string>("Logement special")
    const [selected, setSelected] = useState<TypeSelected>()

    useEffect(()=>{
        function fetchData(){
            setShow(true)
        }
        fetchData()
    }, [])

    const test = () => { 
        console.log("ok")
        HostDataServices.update(id as string, { 'description': description })
        //navigate(`/${id}/property-type`)
        //navigate(`/${id}/property-type`)
    }

    const handleChange = ({currentTarget}: any) => {
        if(currentTarget.value.length <= 500){
            setDescription(currentTarget.value);
        }
    };

    return (
        <PageBuilder title="Starter" show={show}>
            <>
                <StarterBuilder progress={30} btnClick={test} buttonNext={description.length >= 30 ? SBbuttons.allow : SBbuttons.blocked} theme={SBthemes.home} footer={true} title={"Donnez un titre à votre logement"}>
                    <>
                        <div className="flex flex-col justify-start items-center w-full h-full py-20 overflow-scroll">
                            <div className="w-35rem max-w-35rem flex flex-col justify-center h-full">

                            <div className="flex flex-col space-y-2">
                                <div className="font-semibold text-supergray text-2xl ">Donnez-lui une description</div>
                                <div className="text-base font-light text-gray-600">Le titre de votre annonce doit mettre en valeur ce qui fait la particularité de votre logement. <span className='cursor-pointer font-medium text-black underline'>Consulter les consignes relatives au titre de l'annonce.</span></div>
                                <div className="flex flex-col pt-6">
                                    <textarea onChange={handleChange} className="animation duration-200 p-4 border-none rounded-xl focus:outline-none ring-gray-400 ring-1 focus:ring-2 focus:ring-black focus:outline-transparent w-full font-medium text-3xl  text-supergray h-40" value={description}></textarea>
                                    <div className="pt-2 text-sm text-gray-500 font-bold">{description.length}/500</div>
                                </div>
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