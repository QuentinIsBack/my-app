import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChooseButtonNew } from "../../components/button/ChooseButtonNew";
import { BecomeBuilder } from "../../components/pagebuilder/becomeahost";
import { PageBuilder } from "../../components/pagebuilder/pagebuilder";
import { HostBuilder } from "../../constructor/Host.constructor";
import HostDatas from "../../data/Host.data";
import HostDataServices from "../../services/HostData.services";
import PrivacyUtils from '../../utils/Privacy.utils.json'

function App() {
    const [show, setShow] = useState(true);
    const [host, setHost] = useState(new HostDatas())
    const [selected, setSelected] = useState<string | undefined>()

    const navigate = useNavigate();
    const { id } = useParams();

    const clickBack = () => {
        navigate(`/${id}/structure`)
    }
    const clickNext = () => {
        navigate(`/${id}/property`)
    }

    useEffect(() => {
        const fetchData = async () => {
            await HostDataServices.get(id as string).then((e) => {
                const newHost = HostBuilder(e.data())
                setHost(newHost);
                setSelected(newHost.getPrivacyType())
            })
            setShow(true)
        }
        fetchData()
    }, [])

    return (
        <PageBuilder show={show} title={"ok"} >
            <>
                <BecomeBuilder information={`Parlez-nous de votre logement`}
                    clickBack={clickBack}
                    clickNext={clickNext}
                >
                    <>
                        <div className="flex flex-col items-center justify-center space-y-12 w-full h-full animate-showin">
                            <div className="flex flex-col space-y-6 w-[30rem]">
                                <div className="font-semibold text-2xl text-supergray">Quel type de logement sera à la disposition des locataires ?</div>
                                <ChooseButtonNew list={PrivacyUtils} selected={selected} setSelected={setSelected} />
                            </div>
                        </div>
                    </>
                </BecomeBuilder>
            </>
        </PageBuilder>
    );
}
export default App; 
