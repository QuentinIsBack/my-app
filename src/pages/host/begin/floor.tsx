import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IButton } from "../../../components/footer/footer-begin";
import { Begin } from "../../../components/pagebuilder/begin";
import { PageBuilder } from "../../../components/pagebuilder/pagebuilder";

import PropertyUtils from '../../../utils/Property.utils.json'
import HostDataServices from "../../../services/HostData.services";
import { ChooseButtonNew } from "../../../components/button/ChooseButtonNew";
import { HostBuilder } from "../../../constructor/Host.constructor";
import HostDatas from "../../../data/Host.data";
import { FloatingInput } from "../../../components/input/FloatingInput";
import { Incrementor } from "../../../components/incrementor/incrementor";

function App() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [show, setShow] = useState(false)

    const [host, setHost] = useState(new HostDatas())

    useEffect(() => {
        const fetchData = async () => {
            await HostDataServices.get(id as string).then((e)=> {
                const newHost = HostBuilder(e.data())
                setHost(newHost);
            })
            setShow(true)
        }
        fetchData()
    }, [])

    const submit = () => { 
        HostDataServices.update(id as string, { rooms: rooms, bedrooms: bedrooms, bathroom: bathroom })
        navigate(`/${id}/title`)
    }

    const [rooms, setRooms] = useState(4)
    const [bedrooms, setBedrooms] = useState(2)
    const [bathroom, setBathroom] = useState(1)

    return (
        <PageBuilder title="Annonces" show={show}>
            <>
                <Begin nextClic={submit} backBtn={true} nextBtn={IButton.next}>
                    <>
                        <div className="flex flex-col justify-center items-center h-full w-full py-20 overflow-scroll">
                            <div className="w-28rem flex flex-col space-y-8">
                                <div className="font-semibold text-2xl text-supergray">Quelques détails essentiel sur votre logement ?</div>
                                <div className="flex flex-col space-y-6">
                                    <Incrementor id={"rooms"} name={"Pièces"} value={rooms} setValue={setRooms} />
                                    <Incrementor id={"bedrooms"} name={"Chambres"} value={bedrooms} setValue={setBedrooms} />
                                    <Incrementor id={"bathroom"} name={"Salle de bain"} value={bathroom} setValue={setBathroom} />
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
