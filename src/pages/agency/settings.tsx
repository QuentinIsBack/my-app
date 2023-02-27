import { PageBuilder } from "../../components/pagebuilder/pagebuilder";

import { NavBar } from '../../components/navbar/navbar-agency'
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TipsButton } from "../../components/button/tipsbutton";
import { AgencyContext } from "../../contexts/AgencyContext";
import { EditSettings, themesSettings } from "../../components/contener/editsettings";
import { FloatingInput, themes } from "../../components/input/FloatingInput";
import AgencyDataServices from "../../services/AgencyData.services";

function App() {
    const { UserData } = useContext(UserContext)
    const { AgencyData } = useContext(AgencyContext)

    const [newTitle, setNewTitle] = useState(AgencyData.getTitle());
    const [newDescription, setNewDescription] = useState(AgencyData.getDescription());

    const updateTitle = () => {
        AgencyData.updateTitle(newTitle)
    }
    const updateDescription = () => {
        AgencyData.updateDescription(newDescription)
    }


    return (  
        <PageBuilder title="Équipe" show={true} navbar={<NavBar />} footer={undefined} >
            <>
        
                <div className='mx-25rem my-20'>
                    <div className='grid grid-flow-row-dense grid-cols-3 gap-5'>
                        <div className='col-span-2 pr-20'>
                            <div className='flex flex-col'>
                                <div className='text-3xl font-semibold text-supergray'>Paramètre de l'agence</div>
                                <div className='border-b border-2 border-supergray w-10' />
                            </div>

                            <div className="mt-10 flex flex-col space-y-8">
                                <EditSettings
                                    name={"Nom de l'agence"}
                                    message={AgencyData.getTitle()}
                                    theme={themesSettings.cyan}
                                    onClick={updateTitle}
                                    description={"C'est le nom qui figure sur votre document d'identité, à savoir votre permis ou votre passeport, par exemple."}
                                >
                                    <FloatingInput id={'title'} type={'text'} onChange={(e: any)=>setNewTitle(e.target.value)} defaultValue={AgencyData.getTitle()} theme={themes.default} placeholder={"Nom de l'agence"} />
                                </EditSettings>

                                <EditSettings
                                    name={"Description de l'agence"}
                                    message={AgencyData.getDescription()}
                                    theme={themesSettings.cyan}
                                    onClick={updateDescription}
                                    description={"C'est le nom qui figure sur votre document d'identité, à savoir votre permis ou votre passeport, par exemple."}
                                >
                                    <FloatingInput id={'description'} type={'text'} onChange={(e: any) => setNewDescription(e.target.value)} defaultValue={AgencyData.getDescription()} theme={themes.default} placeholder={"Description de l'agence"} />
                                </EditSettings>
                            </div>

                        </div>
                        <div className='col-span-1'>
                            <div className='h-fit border rounded-xl p-5'>
                                <div>
                                    <div className='pt-3 text-xl text-supergray font-semibold'>Pourquoi mes informations se sont-elles pas affichées ici ?</div>
                                    <div className='pt-3 text-sm text-stone-500 font-normal'>Nous masquons certains détails de votre compte afin de protéger votre identité.</div>
                                </div>
                                <div className='border-b my-7' />
                                <div>
                                    <div className='pt-3 text-xl text-supergray font-semibold'>Quelles informations peuvent être modifiées ?</div>
                                    <div className='pt-3 text-sm text-stone-500 font-normal'>Les informations utilisées par AirLoc pour vérifier votre identité ne peuvent être modifiées. Les coordonnées et certaines données personnelles peuvent être modifiées, mais nous pourrions vous demander de vérifier votre identité la prochaine fois que vous réservez un logement ou créez une annonce.</div>
                                </div>
                                <div className='border-b my-7' />
                                <div>
                                    <div className='pt-3 text-xl text-supergray font-semibold'>Lesquelles de mes informations sont communiquées à des tiers ?</div>
                                    <div className='pt-3 text-sm text-stone-500 font-normal'>AirLoc ne communique les coordonnées aux propriétaires et aux locataires qu'après la confirmation d'un dossier.</div>
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
