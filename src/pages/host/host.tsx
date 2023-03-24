import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { PageBuilder } from "../../components/pagebuilder/pagebuilder";
import { NavBar } from "../../components/navbar/navbar-home";
import './host.css'
import HostNewDatas from "../../data/HostNew.data";
import HostDataServices from "../../services/HostData.services";
import { HostBuilderNew } from "../../constructor/HostNew.constructor";
import { LongBar } from "../../components/bar/longbar";
import { LongBarItem } from "../../components/bar/longbaritem";
import { HostContener } from "../../components/contener/HostContener";
import { InfoButton } from "../../components/button/InfoButton";
import { GESSelectorSmall } from "../../components/selector/GESSelectorSmall";
import { DEPSelectorSmall } from "../../components/selector/DPESelectorSmall";
import { Button, IThemeBtn } from "../../components/button/Button";
import { Map } from "react-map-gl";
import { GetGeoInfo, GetGeoInfoByCoord } from "../../components/geocode/geoinfo";
import { UserContext } from "../../contexts/UserContext";
import ConditionsUtils from '../../utils/Conditions.utils.json'
import { Condition } from "../../components/card/conditions";
import { NewBuilder } from "../../constructor/NewBuilder.constructor";
import NewHost from "../../data/NewHost.data";

function App() {
    const [show, setShow] = useState(false);
    const { id } = useParams();
    const [host, setHost] = useState(new NewHost())
    const mapRef = useRef<any>();
    const { UserData } = useContext(UserContext)

    const [test, setTest] = useState();


    useEffect(() => {
        const fetchData = async () => {
            await HostDataServices.get(id as string).then(async (e) => {
                const newBuilder = NewBuilder(e.data(), e.id)
                console.log(newBuilder)
                setHost(newBuilder)

                const a = await GetGeoInfoByCoord(newBuilder.basic.location)
                setTest(a)

                setShow(true)
            })
        }
        fetchData()
        //console.log(test)
    }, [])

    return (
        <>
            {show &&
                <PageBuilder title={host.title} navbar={<NavBar />}>
                    <>
                        <div className="core">
                            
                            {/* Infos de l'annonce */}
                            <div className="corecontener">

                                {/* Images de l'annonce */}
                                {/*<div className="contenerhostimg">
                                    <div className="imgbig" style={{ backgroundImage: `url(${host.assets?.pictures.picture1})` }} />
                                    <div className="imgmedtop" style={{ backgroundImage: `url(${host.assets?.pictures.picture2})` }} />
                                    <div className="imgmedbot" style={{ backgroundImage: `url(${host.assets?.pictures.picture3})` }} />
                                </div>*/}

                                {/* Contener de l'annonce */}
                                <div className="bodycontener">

                                    {/* Titre de l'annonce */}
                                    <span>
                                       <div className="bodytitle">
                                            <div className="bodytitlename">
                                                {host.title}
                                            </div>
                                            <div className="bodytitledesc dot-separator-6">
                                                {host.basic?.rooms && <span>{host.basic.rooms} Pièces</span>}
                                                {host.basic?.bedrooms && <span>{host.basic.bedrooms} Chambres</span>}
                                                {host.basic?.surface && <span>{host.basic.surface} m<sup>2</sup></span>}
                                            </div>
                                        </div>  
                                    </span>

                                    {/* SuperInfo de l'annonce */}
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

                                    {/* À Propos de l'annonce */}
                                    {host.basic&&<span>
                                        <HostContener name="À propos">
                                            <>
                                                <div className={`hostcontenerinfo`}>
                                                    <InfoButton title={"Pièces"} value={host.basic.rooms} icon={"MdMeetingRoom"} />
                                                    <InfoButton title={"Surface"} value={host.basic.surface} icon={"BiHomeAlt"} />
                                                    <InfoButton title={"Chambres"} value={host.basic.bedrooms} icon={"MdOutlineBedroomParent"} />
                                                    <InfoButton title={"Etage"} value={host.basic.floor} icon={"MdBalcony"} />
                                                    <InfoButton title={"GES"} value={<GESSelectorSmall defaultValue={host.basic.ges} />} icon={"MdOutlineBedroomParent"} />
                                                    <InfoButton title={"GES"} value={<DEPSelectorSmall defaultValue={host.basic.dpe} />} icon={"MdOutlineBedroomParent"} />
                                                </div>
                                                <div className="hostcontenerdesc">{host.description}</div>
                                                <Button theme={IThemeBtn.default} title="En savoir plus" />
                                            </>
                                        </HostContener>
                                    </span>}

                                    {/* Lieu du l'annonce */}
                                    {host.basic.location&&<span>
                                        <HostContener name="Où se situe ce logement">
                                            <>
                                            <div className="hostmap">
                                                    <Map
                                                        ref={mapRef} 
                                                        mapboxAccessToken="pk.eyJ1IjoicXVlbnRpbnQiLCJhIjoiY2w4dGM5a3UwMDYwbTNvcXRsbWQyZXRtMSJ9.2IieorABrDO3bK9baO6vvg" 
                                                        initialViewState={{
                                                            longitude: host.basic.location[0],
                                                            latitude: host.basic.location[1],
                                                            zoom: 15
                                                        }} 
                                                        mapStyle="mapbox://styles/quentint/cl8tcc2h2007o14qgzjwt7f1q">   
                                                    </Map>
                                                </div>
                                                <div className="hostloccontener">
                                                    <div className='hostlocname loc-separator'>
                                                        <span>{GetGeoInfo(test).place}</span>
                                                        <span>{GetGeoInfo(test).region}</span>
                                                        <span>{GetGeoInfo(test).country}</span>
                                                    </div>
                                                    <div className='hostlocdesc'>Centre ville et proche des commerces.</div>
                                                </div>
                                            </>
                                        </HostContener>
                                    </span>}

                                </div>
                            </div>

                            {/* Modal de l'annonce */}
                            <div className="modalcontener">
                                <div className="modalform modalcont">
                                    
                                    {/* Titre de l'annonce */}
                                    <div>
                                        <div className="modaltitle">
                                            <div className="modaltitlename"> 
                                                {host.title}
                                            </div>
                                            <div className="modaltitledesc dot-separator-6">
                                                {host.basic?.rooms && <span>{host.basic.rooms} Pièces</span>}
                                                {host.basic?.bedrooms && <span>{host.basic.bedrooms} Chambres</span>}
                                                {host.basic?.surface && <span>{host.basic.surface} m<sup>2</sup></span>}
                                            </div>
                                        </div>    
                                    </div>

                                    {/* Conditions de l'annonce */}
                                    <div>
                                        <div className="modalconditioncont">
                                            <div className='modalconditionname'>{UserData.getFirstname()} : candidature admissible</div>
                                            <div className="modalcondition">
                                                {Object.values(ConditionsUtils).map((m)=>(
                                                    <>
                                                        <Condition title={m.title} free={true} />
                                                    </>
                                                ))}
                                            </div>
                                        </div>   
                                    </div>

                                    {/* Loyer de l'annonce */}
                                    <div>
                                       <div className='flex flex-col'>
                                            <div className="flex flex-row justify-between items-start">
                                                <div className="text-normal font-base text-supergray">
                                                    Loyer HC
                                                </div>
                                                <div className="text-normal font-semibold text-supergray">
                                                    {host.basic.price}€
                                                </div>
                                            </div>
                                            <div className="flex flex-row justify-between items-start">
                                                <div className="text-normal font-base text-supergray">
                                                    Charges <span className="text-xs">(comprennant: Ordure managere, taxe fonciere)</span>
                                                </div>
                                                <div className="text-normal font-semibold text-supergray">
                                                    {host.basic.taxes}€
                                                </div>
                                            </div>
                                            <div className="pt-1 flex flex-row justify-between items-end">
                                                <div className="text-normal font-base text-supergray">
                                                    Loyer TTC
                                                </div>
                                                <div className="text-2xl font-semibold text-supergray">
                                                    {+host.basic.price + +host.basic.taxes}€
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    
                                    {/* En savoir plus sur HubNest */}
                                    <div>
                                       <div className='text-sm font-normal text-supergray leading-snug'>
                                            <span className='cursor-pointer font-semibold underline'>En savoir plus</span> sur la manière dont la confirmation des informations des comptes contribues à garantir la securité de la commaunté Hubnest.
                                        </div> 
                                    </div>
                                    
                                    {/* Candidater à l'annonce */}
                                    <div>
                                        <button className="h-3rem w-full rounded-lg transition-all duration-1000 bg-gradient-to-r to-pink-600 via-indigo-700 from-pink-600 bg-size-200 bg-pos-0 hover:bg-pos-100  text-white text-md">Candidater</button>
                                    </div>           
                                     
                                </div>
                            </div>

                        </div>
                    </>
                </PageBuilder>
            }
        </>
    );
}
export default App; 
