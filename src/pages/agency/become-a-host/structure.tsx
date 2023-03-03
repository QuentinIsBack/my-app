import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChooseButton } from "../../../components/button/ChooseButton";
import { IButton } from "../../../components/footer/footer-begin";
import { NavBar } from "../../../components/navbar/navbar-begin";
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
    const [list, setList] = useState<any[]>()
    const [show, setShow] = useState(false)
    const { id } = useParams<{id?: string}>() as any;
    const [selected, setSelected] = useState<TypeSelected>();
    //const [selected, setSelected] = useState<TypeSelected>(list?.find(idd => idd == AgencyData.getHosts().find(ids => ids.getId() == id)?.getStructure()));
    const navigate = useNavigate();
 
    useEffect(()=>{
        async function fetchData(){
            await CustomDataServices.getAll(IStructure.Structure)
                .then(async (querySnapshot) => {
                    setList(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                    setShow(true)
                })
        }
        fetchData()
    }, [])

    const updateHost = () => {
        async function updateData() {
            await HostDataServices.update(id, {structure: selected?.id}).then((e)=>{
                navigate(`/agency/become-a-host/${id}/property-type`)
            })
        }
        updateData()
    }

    return (
        <PageBuilder title="Annonces" show={show}>
            <>
                <Begin nextClic={updateHost} nextBtn={IButton.next} backBtn={true} progressPercentage={25}>
                    <>
                        <div className='animate-showin flex flex-col justify-center items-center w-full h-full space-y-10'>
                            <div className="w-35rem min-w-35rem flex flex-col space-y-10">
                                <div className="w-full text-left font-semibold text-3xl text-supergray">Quel type de logement allez-vous proposer ?</div>
                                <ChooseButton list={list} selected={selected} setSelected={setSelected} />
                            </div>
                        </div>
                    </>
                </Begin>
            </>
        </PageBuilder>
    );
}

export default App;
