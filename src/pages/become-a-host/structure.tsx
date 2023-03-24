import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChooseButtonNew } from "../../components/button/ChooseButtonNew";
import { BecomeBuilder } from "../../components/pagebuilder/becomeahost";
import { PageBuilder } from "../../components/pagebuilder/pagebuilder";
import { HostBuilder } from "../../constructor/Host.constructor";
import HostDatas from "../../data/Host.data";
import HostDataServices from "../../services/HostData.services";
import StructureUtils from '../../utils/Structure.utils.json'

function App() {
    const [show, setShow] = useState(false);
    const [host, setHost] = useState(new HostDatas())
    const [selected, setSelected] = useState<string | undefined>()

    const navigate = useNavigate();
    const { id } = useParams();

    const clickBack = () => {
        navigate("/become-a-host")
    }
    const clickNext = () => {
        HostDataServices.update(id as string, { structure: selected })
        navigate(`/${id}/privacy`)
    }

    useEffect(() => {
        const fetchData = async () => {
            await HostDataServices.get(id as string).then((e) => {
                const newHost = HostBuilder(e.data())
                setHost(newHost);
                setSelected(newHost.getStructure())
            })
            setShow(true)
        }
        fetchData()
    }, [])

    return (
        <PageBuilder show={true} title={"Quel type de location allez-vous proposer ?"} >
            <>
                <BecomeBuilder 
                    information={`Parlez-nous de votre location`} 
                    clickBack={clickBack}
                    clickNext={clickNext}
                    lockedNext={selected === undefined}
                    show={show} 
                >
                    <>
                        <div className="flex flex-col items-center justify-center space-y-12 w-full h-full animate-showin">
                            <div className="flex flex-col space-y-6 w-[30rem]">
                                <div className="font-semibold text-2xl text-supergray">Quel type de location allez-vous proposer ?</div>
                                <ChooseButtonNew list={StructureUtils} selected={selected} setSelected={setSelected} />
                            </div>
                        </div>
                    </>
                </BecomeBuilder>
            </>
        </PageBuilder>
    );
}
export default App; 

