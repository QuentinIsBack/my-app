import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChooseButton } from "../../../components/button/ChooseButton";
import { IButton } from "../../../components/footer/footer-begin";
import { Begin } from "../../../components/pagebuilder/begin";
import { PageBuilder } from "../../../components/pagebuilder/pagebuilder";
import { AgencyContext } from "../../../contexts/AgencyContext";
import CustomDataServices, { IStructure } from "../../../services/CustomData.services";
import HostDataServices from "../../../services/HostData.services";

type TypeSelected = {
    title: string,
    id: string,
    icon: string
}

function App() {
    const { AgencyData } = useContext(AgencyContext)
    const [listBasic, setListBasic] = useState<any[]>()
    const [listExtra, setListExtra] = useState<any[]>()
    const [show, setShow] = useState(false)
    const { id } = useParams<{id?: string}>() as any;
    const [selectedBasic, setSelectedBasic] = useState<TypeSelected>();
    const [selectedExtra, setSelectedExtra] = useState<TypeSelected>();
    const navigate = useNavigate();
 
    useEffect(()=>{
        async function fetchData(){
            await CustomDataServices.getAll(IStructure.AmenitiesBasic)
                .then(async (querySnapshot) => {
                    setListBasic(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                })
            await CustomDataServices.getAll(IStructure.AmenitiesExtraordinary)
                .then(async (querySnapshot) => {
                    setListExtra(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                    setShow(true)
                })
        }
        fetchData()
    }, [])

    const updateHost = () => {
        async function updateData() {
            /*await HostDataServices.update(id, {structure: selected?.id}).then((e)=>{
                //navigate(`/agency/become-a-host/${id}/property-type`)
            })*/
        }
        updateData()
    }

    return (
        <PageBuilder title="Annonces" show={show}>
            <>
                <Begin nextClic={updateHost} nextBtn={IButton.next} backBtn={true} progressPercentage={100}>
                    <>
                        <div className='animate-showin flex flex-col justify-start items-center w-full h-full space-y-10'>
                            <div className="w-35rem min-w-35rem flex flex-col space-y-12">
                            
                                <div className="flex flex-col space-y-6">
                                    <div className="w-full text-left font-semibold text-3xl text-supergray">Indiquez-nous les équipements du logement</div>
                                    <div className="w-full text-left font-normal text-base text-supergray/75">Vous pourrez ajouter des équipements une fois votre annonce publiée.</div>
                                    <ChooseButton style="grid grid-cols-3 gap-4" list={listBasic} selected={selectedBasic} setSelected={setSelectedBasic} />
                                </div>
                                
                                <div className="flex flex-col space-y-6">
                                    <div className="w-full text-left font-semibold text-xl text-supergray">Possédez-vous des équipements hors du commun ?</div>
                                    <ChooseButton style="grid grid-cols-3 gap-4" list={listExtra} selected={selectedExtra} setSelected={setSelectedExtra} />
                                </div>

                            </div>
                        </div>
                    </>
                </Begin>
            </>
        </PageBuilder>
    );
}

export default App;
