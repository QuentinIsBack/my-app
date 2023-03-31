import { PageBuilder } from "../../../components/pagebuilder/pagebuilder";
import { FolderBuilder } from "../../../components/pagebuilder/folderbuilder";
import { useContext, useState } from "react";
import { ChooseButtonNew } from "../../../components/button/ChooseButtonNew";
import SituationFolder from '../../../utils/folder/ProfessionalSituation.utils.json'
import UserDataServices from "../../../services/UserData.services";
import { UserContext } from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Icon from "../../../components/icon/icons";
import { ProfessionalSituationModal } from "../../../modals/ProfessionalSituationModal";
import { FloatingInput, themes } from "../../../components/input/FloatingInput";

function App() {
    const [title, setTitle] = useState("Situation Professionnelle")
    const { UserData } = useContext(UserContext)
    const navigate = useNavigate();

    const [selected, setSelected] = useState<string | undefined>()
    const [modal, setModal] = useState(false);

    const clickNext = () => {
        UserDataServices.update(UserData.uuid as string, { "folder.essentials.administratif": selected })
        navigate(`/hosting/folder/identity/`)
    }

    return (
        <PageBuilder title="Mon Espace Agence" show={true} footer={undefined} >
            <>
                <FolderBuilder next={clickNext} title={title}>
                    <>
                        <ProfessionalSituationModal show={modal} close={() => setModal(false)} />
                        <div className="flex flex-col items-center justify-start h-full w-full animate-showin">
                            <div className="w-[30rem] py-[1rem] space-y-6">
                                <div className="flex flex-col space-y-2">
                                    <div className="font-semibold text-4xl text-supergray">Situation Professionnelle</div>
                                </div>

                                <div className="space-y-4">
                                    <div className="text-supergray font-normal text-base">
                                        Le locataire peut fournir une copie du document original. Toutefois, le propriétaire a le droit d'exiger la présentation de l'original. Le document doit être rédigé ou traduit en français.
                                    </div>
                                    <div>
                                        <button onClick={()=>setModal(true)} className="h-6rem flex flex-row justify-between border-b items-center w-full">
                                            <div className="flex flex-col  justify-startitems-center space-y-1">
                                                <div className="text-left font-normal text-base text-supergray">Ajouter une situation</div>
                                                <div className="text-left font-normal text-sm text-supergray/60">Etudiant</div>
                                            </div>
                                            <div>
                                                <Icon size={20} name="IoChevronForward" />
                                            </div>
                                        </button>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-supergray font-semibold text-base">
                                            Quel est votre contrat actuelle ?
                                        </div>
                                        <div className="text-supergray/70 font-normal text-sm">
                                            Pensez à renseigner des informations réel. Vos documents seront vérifié par notre équipe afin de fournir a l'annonceur l'integrité des documents.
                                        </div>
                                        <div className="pt-4 flex flex-row space-x-2">
                                            <button className="duration-150 ring-1 hover:ring-2 hover:ring-black ring-gray-200 rounded-3xl hover:bg-gray-100 font-medium text-base text-supergray px-6 py-2">CDI</button>
                                            <button className="duration-150 ring-1 hover:ring-2 hover:ring-black ring-gray-200 rounded-3xl hover:bg-gray-100 font-medium text-base text-supergray px-6 py-2">CDD</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                </FolderBuilder>
            </>
        </PageBuilder>
    );
}

export default App;
