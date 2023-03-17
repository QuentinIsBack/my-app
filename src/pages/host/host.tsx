import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { AgencyContext } from "../../contexts/AgencyContext";
import { useNavigate, useParams } from "react-router-dom";
import { PageBuilder } from "../../components/pagebuilder/pagebuilder";
import { Begin } from "../../components/pagebuilder/begin";
import Icon from "../../components/icon/icons";
import HostDataServices from "../../services/HostData.services";
import { HostBuilder } from "../../constructor/Host.constructor";
import HostDatas from "../../data/Host.data";
import { NavBar } from "../../components/navbar/navbar-home";
import { Footer } from "../../components/footer/footer-begin";

import './host.css'
import { LongBar } from "../../components/bar/longbar";
import { LongBarItem } from "../../components/bar/longbaritem";
import { Contener } from "../../components/contener/contener";
import { ContenerButton } from "../../components/button/ContenerButton";
import { InfoButton } from "../../components/button/InfoButton";

function App() {
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

    return (  
       <PageBuilder title={"Sans nom"} show={show} navbar={<NavBar />}>
            <>
                <div className="bodycontent">
                    <div className="col-span-7 xl:col-span-5 2xl:col-span-5 3xl:col-span-5 4xl:col-span-5 w-full h-full">
                        <div className="grid grid-rows-2 grid-flow-col gap-4 w-full h-96">
                            <button className="shadow-xl row-span-3 col-span-2 w-full bg-gray-100 rounded-l-3xl bg-center bg-cover" style={{ backgroundImage: `url(${''})` }}> </button>
                            <button className="shadow-xl col-span-1 bg-gray-100 rounded-tr-3xl bg-center bg-cover" style={{ backgroundImage: `url(${'home.assets && home.assets.pic2'})` }}> </button>
                            <button className="shadow-xl row-span-2 col-span-1 bg-gray-100 rounded-br-3xl bg-center bg-cover" style={{ backgroundImage: `url(${'home.assets && home.assets.pic3'})` }}> </button>
                        </div>
                        <div className="home-separator">
                            <span>
                                <div className="title">
                                    <div className="titlename">
                                        {host.getTitle() ? host.getTitle() : "Sans nom"}
                                    </div>
                                    <div className="titledesc dot-separator-6">
                                        {host.getRooms() && <span>{host.getRooms()} Pièces </span>}
                                        {host.getBedrooms() && <span>{host.getBedrooms()} Chambres</span>}
                                        {host.getBathroom() && <span>{host.getBathroom()} m<sup>2</sup></span>}
                                    </div>
                                </div>
                            </span>
                            <span>
                                <LongBar>
                                    <>
                                    <LongBarItem
                                        title="Disponible dès maintenant"
                                        description="Le logement est disponible dès maintenant, postulez rapidement pour enménager rapidement."
                                        icon={"SlEnergy"} />
                                    <LongBarItem
                                        title="Idéalement situé"
                                        description="100 % des locataires ont attribué 5 étoiles à l'emplacement du logement."
                                        icon={"SlEnergy"} />
                                        </>
                                </LongBar>
                            </span>
                            <span>
                                <Contener title={"À propos"}>
                                    <>
                                        <div className={`${host.getDescription() && "mb-6"} grid grid-cols-3 w-4/5 gap-4`}>
                                            {/*<InfoButton title={"Surface"} value={home.surface ? home.surface : 0} icon={"BiHomeAlt"} />*/}
                                            <InfoButton title={"Pièces"} value={host.getRooms() ? host.getRooms()+"" : 0 + ""} icon={"MdMeetingRoom"} />
                                            {/*<InfoButton title={"Ascenseur"} value={home.lift ? home.lift : 0} icon={"GiLift"} />*/}
                                            <InfoButton title={"Chambres"} value={host.getBedrooms() ? host.getBedrooms()+"" : 0+""} icon={"MdOutlineBedroomParent"} />
                                            {/*<InfoButton title={"GES"} value={home.ges ? home.ges : 0} icon={"GiPoisonGas"} />*/}
                                            {/*<InfoButton title={"DPE"} value={home.dpe ? home.dpe : 0} icon={"SlEnergy"} />*/}
                                            {/*<InfoButton title={"Etage"} value={home.floor ? home.floor : 0} icon={"MdBalcony"} />*/}
                                            {/*<InfoButton title={"Parking"} value={home.parking ? home.parking : 0} icon={"FaParking"} />*/}
                                        </div>
                                        <div className='contenerdesc'>{host.getDescription()&& host.getDescription()}</div>
                                        <ContenerButton title={"En savoir plus"} />
                                    </>
                                </Contener>
                            </span>
                        </div>
                    </div>
                </div>
            </>
        </PageBuilder>
    );
}

export default App;