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

function App() {
    const [show, setShow] = useState(false);
    const { id } = useParams();
    const [host, setHost] = useState(new HostNewDatas())
    const mapRef = useRef<any>();
    const { UserData } = useContext(UserContext)

    const [test, setTest] = useState();

    useEffect(() => {
        const fetchData = async () => {
            await HostDataServices.get(id as string).then(async (e) => {
                const newD = HostBuilderNew(e.data(), e.id)
                setHost(newD)
                const a = await GetGeoInfoByCoord(newD.location as number[])
                //console.log(a)
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
                <PageBuilder title={host.title + ""} navbar={<NavBar />}>
                    <>
                        <div className="core">
                            
                            {/* Infos de l'annonce */}
                            <div className="corecontener">

                                {/* Images de l'annonce */}
                                <div className="contenerhostimg">
                                    <div className="imgbig" />
                                    <div className="imgmedtop" />
                                    <div className="imgmedbot" />
                                </div>

                                {/* Contener de l'annonce */}
                                <div className="bodycontener">

                                    {/* Titre de l'annonce */}
                                    <span>
                                       <div className="bodytitle">
                                            <div className="bodytitlename">
                                                {host.title}
                                            </div>
                                            <div className="bodytitledesc dot-separator-6">
                                                {host.rooms && <span>{host.rooms} Pièces</span>}
                                                {host.bedrooms && <span>{host.bedrooms} Chambres</span>}
                                                {host.surface && <span>{host.surface} m<sup>2</sup></span>}
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
                                    <span>
                                        <HostContener name="À propos">
                                            <>
                                                <div className={`hostcontenerinfo`}>
                                                    {host.rooms&&<InfoButton title={"Pièces"} value={host.rooms} icon={"MdMeetingRoom"} />}
                                                    {host.surface&&<InfoButton title={"Surface"} value={host.surface} icon={"BiHomeAlt"} />}
                                                    {host.bedrooms&&<InfoButton title={"Chambres"} value={host.bedrooms} icon={"MdOutlineBedroomParent"} />}
                                                    {host.floor&&<InfoButton title={"Etage"} value={host.floor} icon={"MdBalcony"} />}
                                                    {host.ges&&<InfoButton title={"GES"} value={<GESSelectorSmall defaultValue={host.ges} />} icon={"MdOutlineBedroomParent"} />}
                                                    {host.dpe&&<InfoButton title={"GES"} value={<DEPSelectorSmall defaultValue={host.dpe} />} icon={"MdOutlineBedroomParent"} />}
                                                </div>
                                                {host.description&&<div className="hostcontenerdesc">{host.description}</div>}
                                                <Button theme={IThemeBtn.default} title="En savoir plus" />
                                            </>
                                        </HostContener>
                                    </span>

                                    {/* Lieu du l'annonce */}
                                    <span>
                                        <HostContener name="Où se situe ce logement">
                                            <>
                                            {host.location&&<div className="hostmap">
                                                    <Map
                                                        ref={mapRef} 
                                                        mapboxAccessToken="pk.eyJ1IjoicXVlbnRpbnQiLCJhIjoiY2w4dGM5a3UwMDYwbTNvcXRsbWQyZXRtMSJ9.2IieorABrDO3bK9baO6vvg" 
                                                        initialViewState={{
                                                            longitude: host.location[0],
                                                            latitude: host.location[1],
                                                            zoom: 15
                                                        }} 
                                                        mapStyle="mapbox://styles/quentint/cl8tcc2h2007o14qgzjwt7f1q">   
                                                    </Map>
                                                </div>}
                                                {host.location&&<div className="hostloccontener">
                                                    <div className='hostlocname loc-separator'>
                                                        <span>{GetGeoInfo(test).place}</span>
                                                        <span>{GetGeoInfo(test).region}</span>
                                                        <span>{GetGeoInfo(test).country}</span>
                                                    </div>
                                                    <div className='hostlocdesc'>Centre ville et proche des commerces.</div>
                                                </div>}
                                            </>
                                        </HostContener>
                                    </span>

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
                                                {host.rooms && <span>{host.rooms} Pièces</span>}
                                                {host.bedrooms && <span>{host.bedrooms} Chambres</span>}
                                                {host.surface && <span>{host.surface} m<sup>2</sup></span>}
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

                                    {/* En savoir plus sur HubNest */}
                                    <div className='text-sm font-normal leading-snug'>
                                        <span className='font-semibold underline'>En savoir plus</span> sur la manière dont la confirmation des informations des comptes contribues à garantir la securité de la commaunté Hubnest.
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
