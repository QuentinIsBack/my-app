import { PageBuilder } from "../../components/pagebuilder/pagebuilder";

import { NavBar } from '../../components/navbar/navbar-agency'
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TipsButton } from "../../components/button/tipsbutton";
import { AgencyContext } from "../../contexts/AgencyContext";
import Icon from "../../components/icon/icons";

function App() {
    const { UserData } = useContext(UserContext)
    const { AgencyData } = useContext(AgencyContext)

    return (  
        <PageBuilder title="Mon Espace Agence" show={true} navbar={<NavBar />} footer={undefined} >
            <>
                <div className='bg-gradient-to-r from-indigo-800 to-pink-600 h-18rem py-16 px-60 space-y-6 w-full'>
                    <div className='text-4xl font-semibold text-white text-left'>
                        Bonjour {UserData.getFirstname()}
                    </div>
                    <div className='flex space-x-5'>
                        <TipsButton iconN={"AiFillFolder"}>
                            <>Avant de candidater à des logements, pensez à complété votre dossier locataire.</>
                        </TipsButton>
                        <TipsButton iconN={"AiFillFolder"}>
                            <>Vous vous êtes engagés à ce que vos informations soit correct et valide avant votre prochaine location</>
                        </TipsButton>
                    </div>
                </div>

                <div className="px-60 py-10 space-y-6">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-col space-y-2">
                            <div className="font-semibold text-3xl text-supergray text-left">Les logements</div>
                            <div className="font-normal text-sm text-supergray/90">Consulté les logements de l'agence et leurs états rapidement.</div>
                        </div>
                        <button className="duration-150 self-start font-semibold text-md text-left underline hover:bg-gray-100 rounded-lg px-4 py-2">Tous les logements (0)</button>
                    </div>
                    <div className="flex flex-row space-x-4">
                        <button className="duration-150 font-medium text-sm text-center hover:bg-gray-50 outline outline-1 outline-gray-200 hover:outline-black rounded-full px-4 py-2">Arrivé prochains (0)</button>
                        <button className="duration-150 font-medium text-sm text-center hover:bg-gray-50 outline outline-1 outline-gray-200 hover:outline-black rounded-full px-4 py-2">Locations en cours (0)</button>
                        <button className="duration-150 font-medium text-sm text-center hover:bg-gray-50 outline outline-1 outline-gray-200 hover:outline-black rounded-full px-4 py-2">Locations terminé (0)</button>
                    </div>
                    <div className={`bg-gray-100/70 rounded-2xl h-15rem p-5`}>
                        <div className='flex flex-col justify-center items-center h-full'>
                            <Icon name="BsClipboardCheck" size={35} />
                            <div className='text-center pt-5'>
                                <p className='font-normal text-sm'>Vous n'avez aucuns logements en ce moment.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-60 py-10 space-y-6">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-col space-y-2 w-full">
                            <div className="font-semibold text-2xl text-supergray text-left">Nous sommes là pour vous aider</div>
                            <div className="grid grid-cols-2 gap-4 w-full">
                                <div className="flex flex-row ring-2 ring-gray-100 hover:ring-black duration-150 rounded-lg px-4 py-3 hover:bg-gray-100 space-x-4 w-full">
                                    <div className="flex items-start">
                                        <Icon name="IoBriefcaseOutline" size={30} />
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <div className="font-medium text-lg test-supergray text-left">
                                            Bienvenue sur HubNEst
                                        </div>
                                        <div className="font-normal text-base test-supergray/90 text-left">
                                            Bienvenue sur HubNEst
                                        </div>
                                    </div>
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
