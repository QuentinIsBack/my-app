import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IButton } from "../../../components/footer/footer-begin";
import { Begin } from "../../../components/pagebuilder/begin";
import { PageBuilder } from "../../../components/pagebuilder/pagebuilder";
import { UserContext } from "../../../contexts/UserContext";
import CustomDataServices, { IStructure } from "../../../services/CustomData.services";
import { orderBy } from "firebase/firestore";
import { ChooseButton } from "../../../components/button/ChooseButton";
import HostDataServices from "../../../services/HostData.services";

type TypeSelected = {
    title: string,
    id: string,
    description: string
}
function App() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [show, setShow] = useState(false)

    const [list, setList] = useState<any[]>()
    const [selected, setSelected] = useState<TypeSelected>()

    useEffect(()=>{
        async function fetchData(){
            await CustomDataServices.getAll(IStructure.Structure, orderBy('sort'))
                .then((querySnapshot) => setList(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
                setShow(true)
        }
        fetchData()
    }, [])

    const submit = () => { 
        HostDataServices.update(id as string, { structure: selected })
        //navigate(`/${id}/property-type`)
        navigate(`/${id}/privacy`)
    }

    return (
        <PageBuilder title="Annonces" show={show}>
            <>
                <Begin nextClic={submit} backBtn={true} nextBtn={IButton.next}>
                    <>
                        <div className="flex flex-col justify-center items-center h-full w-full py-20 overflow-scroll">
                            <div className="w-30rem flex flex-col space-y-8">
                                <div className="font-semibold text-2xl text-supergray">Quel type de logement allez-vous proposer ?</div>
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
