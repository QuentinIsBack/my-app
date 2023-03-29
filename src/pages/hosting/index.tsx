import { PageBuilder } from "../../components/pagebuilder/pagebuilder";

import { NavBar } from '../../components/navbar/navbar-home'
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TipsButton } from "../../components/button/tipsbutton";
import Icon from "../../components/icon/icons";
import { FolderModal } from "../../modals/FolderModal";

function App() {
    const [show, setShow] = useState(true);
    const { UserData } = useContext(UserContext)

    const [modal, setModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if ( UserData.folder === undefined ) {
                console.log("dossier à remplir")
                setModal(true)
            }
            setShow(true)
        }
        fetchData()
    }, [])

    return (  
        <>
            {show && <PageBuilder title="Mon Espace Locataire" navbar={<NavBar />} footer={undefined} >
                <>
                    <FolderModal show={modal} close={() => setModal(false)} />

                    <div className='bg-gradient-to-r from-indigo-800 to-pink-600 h-18rem py-16 px-60 space-y-6 w-full'>
                        <div className='text-4xl font-semibold text-white text-left'>
                            Bonjour {UserData.firstname}
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
                                <div className="font-semibold text-3xl text-supergray text-left">Mes candidatures</div>
                                <div className="font-normal text-sm text-supergray/90">Consulté l'état de vos candidatures et suivez leurs avancés.</div>
                            </div>
                            <button className="duration-150 self-start font-semibold text-md text-left underline hover:bg-gray-100 rounded-lg px-4 py-2">Toutes les candidatures (0)</button>
                        </div>
                        <div className="flex flex-row space-x-4">
                            <button className="duration-150 font-medium text-sm text-center hover:bg-gray-50 outline outline-1 outline-gray-200 hover:outline-black rounded-full px-4 py-2">En attente (0)</button>
                            <button className="duration-150 font-medium text-sm text-center hover:bg-gray-50 outline outline-1 outline-gray-200 hover:outline-black rounded-full px-4 py-2">Candidatures refusé (0)</button>
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

                </>
            </PageBuilder>}
        </>
    );
}

export default App;
