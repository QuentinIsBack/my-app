import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IButton } from "../../components/footer/footer-begin";
import { Begin } from "../../components/pagebuilder/begin";
import { PageBuilder } from "../../components/pagebuilder/pagebuilder";

import PropertyUtils from '../../utils/Property.utils.json'
import HostDataServices from "../../services/HostData.services";
import { ChooseButtonNew } from "../../components/button/ChooseButtonNew";
import { HostBuilder } from "../../constructor/Host.constructor";
import HostDatas from "../../data/Host.data";
import { FloatingInput, themes } from "../../components/input/FloatingInput";
import { Incrementor } from "../../components/incrementor/incrementor";
import { BigInput } from "../../components/input/BigInput";
import { DEPSelector } from "../../components/selector/DEPSelector";
import { GESSelector } from "../../components/selector/GESSelector";
import Icon from "../../components/icon/icons";
import { HolderInput } from "../../components/input/HolderInput";

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
                            <div className="w-36rem flex flex-col space-y-14">
                                <div className="font-semibold text-2xl text-supergray">Communiquez nous quelques détails essentiel sur votre logement</div>
                                
                                <div className="flex flex-col space-y-6">
                                    <Incrementor id={"rooms"} name={"Pièces"} value={rooms} setValue={setRooms} />
                                    <Incrementor id={"bedrooms"} name={"Chambres"} value={bedrooms} setValue={setBedrooms} />
                                    <Incrementor id={"bathroom"} name={"Salle de bain"} value={bathroom} setValue={setBathroom} />
                                </div>

                                <div className="grid grid-cols-2 gap-10 justify-between h-full">
                                    <div className="flex flex-col space-y-4">
                                        <div className="font-semibold text-xl text-supergray">Surface habitable</div>
                                        <HolderInput id={""} type={""} defaultValue={24+""} placeholder={"m²"} theme={themes.default} />
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        <div className="font-semibold text-xl text-supergray">Étage du logement</div>
                                        <HolderInput id={""} type={""} defaultValue={1+""} theme={themes.default} />
                                    </div>
                                </div>

                                
                                <div className="grid grid-cols-2 gap-10 justify-between h-full">
                                    <div className="flex flex-col space-y-4">
                                        <div className="font-semibold text-xl text-supergray inline-flex items-center space-x-2">
                                            <div>DEP</div> 
                                            <button className="tooltip" data-tip="Le diagnostic de performance énergétique (DPE) renseigne sur la performance énergétique et climatique d’un logement ou d’un bâtiment (étiquettes A à G), en évaluant sa consommation d’énergie et son impact en terme d’émissions de gaz à effet de serre.">
                                                <Icon name="RiQuestionLine" size={20} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        <div className="font-semibold text-xl text-supergray inline-flex items-center space-x-2">
                                        <div>GES</div> 
                                            <button className="tooltip" data-tip="La classe GES c'est une « note » qui est attribuée à un logement, après le calcul quantitatif de ses émissions de gaz à effet de serre (GES). Le GES est exprimé en kg eq CO2/m2.an. La classe GES dépend donc du poids « d'équivalent CO2 » émis chaque année par le logement.">
                                                <Icon name="RiQuestionLine" size={20} />
                                            </button>
                                        </div>
                                    </div>
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
