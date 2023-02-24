import { PageBuilder } from "../../components/pagebuilder/pagebuilder";

import { NavBar } from '../../components/navbar/navbar-agency'
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TipsButton } from "../../components/button/tipsbutton";
import { Icon } from "../../components/icon/icons";
import { AgencyContext } from "../../contexts/AgencyContext";
import UserDataServices from "../../services/UserData.services";
import { where } from "firebase/firestore";
import UserDatas from "../../data/User.data";


function App() {
    const { UserData } = useContext(UserContext)
    const { AgencyData } = useContext(AgencyContext)

    const [show, setShow] = useState(false)

    const permissions = [
        {
            title: "Autorisations de base",
            description: "Accès en révision uniquement aux listes, aux calendriers, aux réservations, aux performances du compte et. profils d'équipe."
        },
        {
            title: "Gestion des annonces",
            description: "Créer des annonces, définir la tarification initiale, modifier le contenu de l'annonce et modifier le statut de l'annonce"
        },
        {
            title: "Gestion des candidatures",
            description: "Modifier les réservations et le calendrier. Pré-approuver, contacter et évaluer les candidats."
        },
        {
            title: "Prix et disponibilité",
            description: "Modifiez les paramètres de tarification et de disponibilité. Créer et modifier des ensembles de règles."
        },
        {
            title: "Finances",
            description: "Examinez et créez des rapports sur les revenus et l'historique des transactions."
        },
        {
            title: "Gestion d'équipe",
            description: "Modifiez les autorisations des membres de l'équipe et gérez les invitations."
        }
    ]

    return (  
        <PageBuilder title="Équipe" show={true} navbar={<NavBar />} footer={undefined} >
            <>
                <div className="h-full w-full flex flex-col">
                    <div className="grid grid-cols-10 max-h-20rem h-20rem divide-x border-b">
                        <div className="col-span-2 h-full z-10" style={{ boxShadow: '10px 0px 8px 0px rgba(0,0,0,0.04)' }}>
                            <div className="flex flex-col items-center justify-center h-full space-y-1">
                                <div className="font-semibold text-supergray text-3xl">{AgencyData.getTitle()}</div>
                                <div className="font-medium text-supergray/60 text-base">{AgencyData.getMembers()?.length} membres</div>
                            </div>
                        </div>
                        <div className="col-span-8 h-full overflow-hidden">
                            <div className="h-full divide-y">
                                <div className="flex flex-row items-center px-10 max-h-7rem h-7rem">
                                    <div className="flex flex-row items-end space-x-5">
                                        <div className="font-semibold text-supergray text-xl">
                                            Gérer les autorisations
                                        </div>
                                        <button className="font-semibold pb-0.5 text-[#2292a4] text-sm hover:underline">
                                            Plus d'informations
                                        </button>
                                    </div>
                                </div>
                                <div className="grow h-full grid grid-cols-6 divide-x">
                                    {permissions.map(m => (
                                        <div className="p-5 pt-8 flex flex-col space-y-3 overflow-hidden">
                                            <div className="font-semibold text-supergray text-base">
                                                {m.title}
                                            </div>
                                            <div className="font-medium text-supergray/60 text-sm">
                                                {m.description}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-10 divide-x">
                        {AgencyData.getMembers()?.map((os)=>(
                            <>
                                <div className="col-span-2 h-full border-b" >
                                    <div className="px-4 py-3 h-4.5rem flex flex-row items-center space-x-4">
                                        <div className="h-full">
                                            <img alt='profile' className="h-full rounded-full" style={{
                                            }} src={"https://upload.wikimedia.org/wikipedia/commons/4/45/Quentin_Truffy_Profile.png"} />
                                        </div>
                                        <div className="h-full flex flex-col items-start justify-between">
                                            <div className="font-semibold text-supergray/80 text-lg items-center flex flex-row space-x-2">
                                                <div>
                                                    {os.getFirstname()+ " " + os.getLastname()}
                                                </div>
                                                {os.getUID() == UserData.getUID() && <div className="text-sm text-supergray/50">(Vous)</div>}
                                            </div>
                                            <div className="font-medium text-supergray/60 text-sm">
                                                {AgencyData.getOwner() == os.getUID() && <span className="text-[#2292a4]">Gérant</span>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-8 h-full border-b">
                                    <div className="h-4.5rem grid grid-cols-6 divide-x">
                                        <div className="flex items-center justify-center"><input checked={AgencyData.getPermissions().basic?.includes(os.getUID())} type="checkbox" className="checkbox" /></div>
                                        <div className="flex items-center justify-center"><input checked={AgencyData.getPermissions().ads?.includes(os.getUID())} type="checkbox" className="checkbox" /></div>
                                        <div className="flex items-center justify-center"><input checked={AgencyData.getPermissions().guest?.includes(os.getUID())} type="checkbox" className="checkbox" /></div>
                                        <div className="flex items-center justify-center"><input checked={AgencyData.getPermissions().price?.includes(os.getUID())} type="checkbox" className="checkbox" /></div>
                                        <div className="flex items-center justify-center"><input checked={AgencyData.getPermissions().finance?.includes(os.getUID())} type="checkbox" className="checkbox" /></div>
                                        <div className="flex items-center justify-center"><input checked={AgencyData.getPermissions().team?.includes(os.getUID())} type="checkbox" className="checkbox" /></div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                   
                </div>
            </>
        </PageBuilder>
    );
}

export default App;
