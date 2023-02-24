import { PageBuilder } from "../../components/pagebuilder/pagebuilder";

import { NavBar } from '../../components/navbar/navbar-agency'
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TipsButton } from "../../components/button/tipsbutton";
import { Icon } from "../../components/icon/icons";
import { AgencyContext } from "../../contexts/AgencyContext";

function App() {
    const { UserData } = useContext(UserContext)
    const { AgencyData } = useContext(AgencyContext)

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
            title: "Gestion des invités",
            description: "Modifier les réservations et le calendrier. Pré-approuver, contacter et évaluer l'invité. Envoyer des offres et déposer des réclamations"
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
                   
                </div>
            </>
        </PageBuilder>
    );
}

export default App;
