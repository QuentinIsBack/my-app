import { useContext, useEffect, useRef, useState } from "react";
import { json, useParams } from "react-router-dom";
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
import ConditionsUtils from '../../utils/Condition.utils.json'
import { Condition } from "../../components/card/conditions";
import { NewBuilder } from "../../constructor/NewBuilder.constructor";
import NewHost from "../../data/NewHost.data";

import StructureUtils from '../../utils/Structure.utils.json'
import PropertyUtils from '../../utils/Property.utils.json'
import PrivacyUtils from '../../utils/Privacy.utils.json'
import SuperInfoUtils from '../../utils/SuperInfo.utils.json'
import AmenitiesUtils from '../../utils/Amenities.utils.json'
import Icon from "../../components/icon/icons";

interface StructureUtils {
    id: string;
    icon: string;
    title: string;
  }

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
                //console.log(newBuilder)
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
                                <div className="contenerhostimg">
                                    <div className="imgbig" style={{ backgroundImage: `url(${host.assets?.pictures.picture1})` }} />
                                    <div className="imgmedtop" style={{ backgroundImage: `url(${host.assets?.pictures.picture2})` }} />
                                    <div className="imgmedbot" style={{ backgroundImage: `url(${host.assets?.pictures.picture3})` }} />
                                </div>

                                {/* Contener de l'annonce */}
                                <div className="bodycontener">

                                    {/* Titre de l'annonce */}
                                    <span>
                                       <div className="bodytitle">
                                            <div className="bodytitlename sep-title">
                                                {Object.values(PrivacyUtils).filter(r => r.id === host.basic.privacy).at(0)?.title&&<span>{Object.values(PrivacyUtils).filter(r => r.id === host.basic.privacy).at(0)?.title}</span>}
                                                {Object.values(StructureUtils).filter(r => r.id === host.basic.structure).at(0)?.title&&<span>{Object.values(StructureUtils).filter(r => r.id === host.basic.structure).at(0)?.title}</span>}
                                                {Object.values(PropertyUtils).filter(r => r.id === host.basic.property).at(0)?.title&&<span>{Object.values(PropertyUtils).filter(r => r.id === host.basic.property).at(0)?.title}</span>}
                                            </div>
                                            <div className="bodytitledesc dot-separator-6">
                                                {host.basic?.rooms !== 0 && <span>{host.basic.rooms} pièces</span>}
                                                {host.basic?.bedrooms !== 0 && <span>{host.basic.bedrooms} chambres</span>}
                                                {host.basic?.surface !== 0 && <span>{host.basic.surface} m<sup>2</sup></span>}
                                            </div>
                                        </div>  
                                    </span>

                                    {/* SuperInfo de l'annonce */}
                                    {host.basic.superinfos.length > 0 &&<span>
                                        <LongBar>
                                            <>
                                                {Object.values(SuperInfoUtils).map((m)=> {
                                                    if(host.basic.superinfos.includes(m.id)) {
                                                        return (
                                                            <LongBarItem
                                                            title={m.title}
                                                            description={m.description}
                                                            icon={m.icon} />
                                                        )
                                                    }
                                                })}
                                            </>
                                        </LongBar>
                                    </span>}

                                    {/* À Propos de l'annonce */}
                                    {host.basic&&<span>
                                        <HostContener name="À propos">
                                            <>
                                                <div className="space-y-6">
                                                    <div className={`hostcontenerinfo`}>
                                                        <InfoButton title={"Pièces"} value={host.basic.rooms} icon={"MdMeetingRoom"} />
                                                        <InfoButton title={"Surface"} value={host.basic.surface} icon={"BiHomeAlt"} />
                                                        <InfoButton title={"Chambres"} value={host.basic.bedrooms} icon={"MdOutlineBedroomParent"} />
                                                        <InfoButton title={"Etage"} value={host.basic.floor} icon={"MdBalcony"} />
                                                        <InfoButton title={"DPE"} value={<DEPSelectorSmall defaultValue={host.basic.dpe} />} icon={"MdOutlineBedroomParent"} />
                                                        <InfoButton title={"GES"} value={<GESSelectorSmall defaultValue={host.basic.ges} />} icon={"MdOutlineBedroomParent"} />
                                                    </div>
                                                    <div className="hostcontenerdesc">{host.description}</div>
                                                    <Button theme={IThemeBtn.default} title="En savoir plus" />
                                                </div>
                                            </>
                                        </HostContener>
                                    </span>}

                                    {/* Equipement de l'annonce */}
                                    {host.basic.amenities.length > 0&&<span>
                                        <HostContener name="Ce que propose ce logement">
                                            <>
                                                <div className='grid grid-cols-2 w-1/2 gap-5'>
                                                    {Object.values(AmenitiesUtils).map((m)=> {
                                                        if(host.basic.amenities.includes(m.id)) {
                                                            return (
                                                                <div className='flex flex-row justify-left items-center space-x-5'>
                                                                    <div><Icon name={m.icon} size={30} /></div>
                                                                    <div className='text-left font-medium text-md text-gray-800'>{m.title}</div>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
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
                                                <div className="hostdesccontener">
                                                    <div className='hostlocname loc-separator'>
                                                        <span>{GetGeoInfo(test).place}</span>
                                                        <span>{GetGeoInfo(test).region ?? GetGeoInfo(test).locality}</span>
                                                        <span>{GetGeoInfo(test).country}</span>
                                                    </div>
                                                    <div className='hostlocdesc'>Centre ville et proche des commerces.</div>
                                                </div>
                                            </>
                                        </HostContener>
                                    </span>}

                                    {/* A Savoir du l'annonce */}
                                    <span>
                                        <HostContener name="À savoir">
                                            <>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3 4xl:grid-cols-3 gap-5">
                                                    
                                                    <div className="flex flex-col">
                                                        <div className="font-medium text-lg text-supergray pb-2">
                                                            Règlement intérieur
                                                        </div>
                                                        <div className='flex flex-col space-y-1.5 text-supergray'>
                                                            <div className='flex flex-row space-x-3 items-center'>
                                                                <div className='self-start pt-1'>
                                                                    <Icon name={"FaHorse"} size={18} />
                                                                </div>
                                                                <div>
                                                                    Pas d'animaux
                                                                </div>
                                                            </div>
                                                            <div className='flex flex-row space-x-3 items-center'>
                                                                <div className='self-start pt-1'>
                                                                    <Icon name={"MdOutlineSmokeFree"} size={18} />
                                                                </div>
                                                                <div>
                                                                    Non fumeur
                                                                </div>
                                                            </div>
                                                            <div className='flex flex-row space-x-3 items-center'>
                                                                <div className='self-start pt-1'>
                                                                    <Icon name={"BsFillDoorClosedFill"} size={18} />
                                                                </div>
                                                                <div>
                                                                    Pas de fête ni de soirée
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-col">
                                                        <div className="font-medium text-lg text-supergray pb-2">
                                                            Santé et sécurité
                                                        </div>
                                                        <div className='flex flex-col space-y-1.5 text-supergray'>
                                                            <div className='flex flex-row space-x-3 items-center'>
                                                                <div className='self-start pt-1'>
                                                                    <Icon name={"GoClock"} size={18} />
                                                                </div>
                                                                <div>
                                                                    Détecteur de fumée
                                                                </div>
                                                            </div>
                                                            <div className='flex flex-row space-x-3 items-center'>
                                                                <div className='self-start pt-1'>
                                                                    <Icon name={"GoClock"} size={18} />
                                                                </div>
                                                                <div>
                                                                    Aucun détecteur de monoxyde de carbone
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-col">
                                                        <div className="font-medium text-lg text-supergray pb-2">
                                                            Conditions du bien
                                                        </div>
                                                        <div className='flex flex-col space-y-1.5 text-supergray'>
                                                            <div className='flex flex-row space-x-3 items-center'>
                                                                <div className='self-start pt-1'>
                                                                    <Icon name={"GoClock"} size={18} />
                                                                </div>
                                                                <div>
                                                                    Les consignes d'HubNest en matière de distanciation physique et d'autres consignes liées au Covid-19 s'appliquent.
                                                                </div>
                                                            </div>
                                                            <div className='flex flex-row space-x-3 items-center'>
                                                                <div className='self-start pt-1'>
                                                                    <Icon name={"GoClock"} size={18} />
                                                                </div>
                                                                <div>
                                                                    Détecteur de fumée
                                                                </div>
                                                            </div>
                                                            <div className='flex flex-row space-x-3 items-center'>
                                                                <div className='self-start pt-1'>
                                                                    <Icon name={"GoClock"} size={18} />
                                                                </div>
                                                                <div>
                                                                    Aucun détecteur de monoxyde de carbone
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
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
                                                {host.basic?.rooms !== 0 && <span>{host.basic.rooms} pièces</span>}
                                                {host.basic?.bedrooms !== 0 && <span>{host.basic.bedrooms} chambres</span>}
                                                {host.basic?.surface !== 0 && <span>{host.basic.surface} m<sup>2</sup></span>}
                                            </div>
                                        </div>    
                                    </div>

                                    {/* Conditions de l'annonce */}
                                    {host.basic.conditions.length > 0 &&<div>
                                        <div className="modalconditioncont">
                                            <div className='modalconditionname'>{UserData.getFirstname()} : candidature admissible</div>
                                            <div className="modalcondition">
                                                {Object.values(ConditionsUtils).map((m)=>{
                                                    if(host.basic.conditions.includes(m.id)) {
                                                        return(<Condition title={m.title} free={true} />)
                                                    }
                                                })}
                                            </div>
                                        </div> 
                                    </div>}

                                    {/* Loyer de l'annonce */}
                                    <div>
                                       <div className='flex flex-col'>
                                            <div className="flex flex-row justify-between items-start">
                                                <div className="text-base font-medium text-supergray">
                                                    Loyer HC
                                                </div>
                                                <div className="text-base font-semibold text-supergray whitespace-nowrap">
                                                    {host.basic.price} €
                                                </div>
                                            </div>
                                            <div className="flex flex-row justify-between items-start">
                                                <div className="text-base font-medium text-supergray ">
                                                    Charges <span className="text-xs font-normal">(comprennant: Ordure managere, taxe fonciere)</span>
                                                </div>
                                                <div className="text-base font-semibold text-supergray whitespace-nowrap">
                                                    {host.basic.taxes} €
                                                </div>
                                            </div>
                                            <div className="pt-1 flex flex-row justify-between items-end">
                                                <div className="text-base font-medium text-supergray">
                                                    Loyer TTC
                                                </div>
                                                <div className="text-2xl font-semibold text-supergray whitespace-nowrap">
                                                    {+host.basic.price + +host.basic.taxes} €
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
