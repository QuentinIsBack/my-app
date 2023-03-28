import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChooseButtonNew } from "../../components/button/ChooseButtonNew";
import Icon from "../../components/icon/icons";
import { Incrementor } from "../../components/incrementor/incrementor";
import { HolderInput, themes } from "../../components/input/HolderInput";
import { BecomeBuilder } from "../../components/pagebuilder/becomeahost";
import { PageBuilder } from "../../components/pagebuilder/pagebuilder";
import { DEPSelector } from "../../components/selector/DEPSelector";
import { GESSelector } from "../../components/selector/GESSelector";
import { HostBuilder } from "../../constructor/Host.constructor";
import HostDatas from "../../data/Host.data";
import HostDataServices from "../../services/HostData.services";
import PropertyUtils from '../../utils/Property.utils.json'

function App() {
    const [show, setShow] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams();
 
    const [rooms, setRooms] = useState(2)
    const [bedrooms, setBedrooms] = useState(1)
    const [bathroom, setBathroom] = useState(1)
    const [surface, setSurface] = useState(28)
    const [floor, setFloor] = useState(1)
    const [dpe, setDpe] = useState("d")
    const [ges, setGes] = useState("d")

    const clickBack = () => { 
        navigate(`/${id}/property`)
    }
    const clickNext = () => {
        HostDataServices.update(id as string, { 
            "basic.rooms": rooms,
            "basic.bedrooms": bedrooms,
            "basic.bathroom": bathroom,
            "basic.surface": surface,
            "basic.floor": floor,
            "basic.dpe": dpe,
            "basic.ges": ges
        })
        navigate(`/${id}/title`)
    } 

    return (
        <PageBuilder show={true} title={"Communiquez nous quelques détails essentiel sur votre logement"} >
            <>
                <BecomeBuilder information={`Les petits plus`}
                    clickBack={clickBack}
                    clickNext={clickNext}
                    lockedNext={false}
                    show={show}
                >
                    <>
                        <div className="flex flex-col items-center justify-center space-y-12 w-full h-full animate-showin">
                            <div className="flex flex-col space-y-6 w-[30rem]">
                                <div className="font-semibold text-2xl text-supergray">Communiquez nous quelques détails essentiel sur votre logement</div>
                                
                                <div className="flex flex-col space-y-4">
                                    <div className="flex flex-col space-y-6 justify-end">
                                        <Incrementor id={"rooms"} name={"Pièces"} value={rooms} setValue={setRooms} />
                                        <Incrementor id={"bedrooms"} name={"Chambres"} value={bedrooms} setValue={setBedrooms} />
                                        <Incrementor id={"bathroom"} name={"Salle de bain"} value={bathroom} setValue={setBathroom} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-10 justify-between h-full">
                                    <div className="flex flex-col space-y-4">
                                        <div className="font-semibold text-xl text-supergray">Surface habitable</div>
                                        <HolderInput id={""} type={"number"} defaultValue={surface} onChange={(e)=>{setSurface(e as number)}} placeholder={"m²"} theme={themes.default} />
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        <div className="font-semibold text-xl text-supergray">Étage du logement</div>
                                        <HolderInput id={""} type={""} defaultValue={floor} onChange={(e) => { setFloor(e as number) }} theme={themes.default} />
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
                                        <DEPSelector defaultValue={dpe} onChange={(e) => { setDpe(e) }} />
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        <div className="font-semibold text-xl text-supergray inline-flex items-center space-x-2">
                                            <div>GES</div>
                                            <button className="tooltip" data-tip="La classe GES c'est une « note » qui est attribuée à un logement, après le calcul quantitatif de ses émissions de gaz à effet de serre (GES). Le GES est exprimé en kg eq CO2/m2.an. La classe GES dépend donc du poids « d'équivalent CO2 » émis chaque année par le logement.">
                                                <Icon name="RiQuestionLine" size={20} />
                                            </button>
                                        </div>
                                        <GESSelector defaultValue={ges} onChange={(e) => { setGes(e) }} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </>
                </BecomeBuilder>
            </>
        </PageBuilder>
    );
}
export default App; 