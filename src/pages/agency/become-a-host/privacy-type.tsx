import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChooseButton } from "../../../components/button/ChooseButton";
import { IButton } from "../../../components/footer/footer-begin";
import { NavBar } from "../../../components/navbar/navbar-begin";
import { Begin } from "../../../components/pagebuilder/begin";
import { PageBuilder } from "../../../components/pagebuilder/pagebuilder";
import { UserContext } from "../../../contexts/UserContext";
import CustomDataServices, { IStructure } from "../../../services/CustomData.services";
import HostDataServices from "../../../services/HostData.services";

type TypeSelected = {
    title: string,
    id: string,
    description: string
}

function App() {
    const [list, setList] = useState<any[]>()
    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState<TypeSelected>()
    const { id } = useParams<{id?: string}>() as any;
    const navigate = useNavigate();

    useEffect(()=>{
        async function fetchData(){
            await CustomDataServices.getAll(IStructure.PrivacyType)
                .then((querySnapshot) => setList(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
                setShow(true)
        }
        fetchData()
    })

    const updateHost = () => {
        async function updateData() {
            await HostDataServices.update(id, {"privacy-type": selected?.id}).then((e)=>{
                //navigate(`/agency/become-a-host/${id}/property-type`)
            })
        }
        updateData()
    }

    return (
        <PageBuilder title="Annonces" show={show}>
            <>
                <Begin nextClic={updateHost} nextBtn={IButton.next} backBtn={true} progressPercentage={100}>
                    <>
                        <div className='flex flex-col justify-center items-center w-full h-full px-35rem space-y-10'>
                            <div className="w-full text-left font-semibold text-3xl text-supergray">Quel type de logement sera à la disposition des voyageurs ?</div>
                            <ChooseButton list={list} selected={selected} setSelected={setSelected} />
                        </div>
                    </>
                </Begin>
            </>
        </PageBuilder>
    );
}

export default App;
