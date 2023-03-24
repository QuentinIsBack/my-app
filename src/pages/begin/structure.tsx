import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IButton } from "../../components/footer/footer-begin";
import { Begin } from "../../components/pagebuilder/begin";
import { PageBuilder } from "../../components/pagebuilder/pagebuilder";

import StructureUtils from '../../utils/Structure.utils.json'
import HostDataServices from "../../services/HostData.services";
import { ChooseButtonNew } from "../../components/button/ChooseButtonNew";
import { HostBuilder } from "../../constructor/Host.constructor";
import HostDatas from "../../data/Host.data";

function App() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [show, setShow] = useState(false)

    const [host, setHost] = useState(new HostDatas())
    const [selected, setSelected] = useState<string | undefined>()

    useEffect(() => {
        const fetchData = async () => {
            await HostDataServices.get(id as string).then((e)=> {
                const newHost = HostBuilder(e.data())
                setHost(newHost);
                setSelected(newHost.getStructure())
            })
            setShow(true)
        }
        fetchData()
    }, [])

    const submit = () => { 
        HostDataServices.update(id as string, { structure: selected })
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
                                <ChooseButtonNew list={StructureUtils} selected={selected} setSelected={setSelected} />
                            </div>
                        </div>
                    </>
                </Begin>
            </>
        </PageBuilder>
    );
}

export default App;
