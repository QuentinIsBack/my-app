import { PageBuilder } from "../../../components/pagebuilder/pagebuilder";
import { FolderBuilder } from "../../../components/pagebuilder/folderbuilder";
import { useContext, useState } from "react";
import { ChooseButtonNew } from "../../../components/button/ChooseButtonNew";
import SituationFolder from '../../../utils/folder/ProfessionalSituation.utils.json'
import UserDataServices from "../../../services/UserData.services";
import { UserContext } from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Icon from "../../../components/icon/icons";
import RessourcesList from "../../../utils/folder/Ressources.folder.json";
import SituationsList from "../../../utils/folder/ProfessionalSituation.utils.json";

function App() {
    const [title, setTitle] = useState("Ressources")
    const { UserData } = useContext(UserContext)
    const navigate = useNavigate();

    const [modal, setModal] = useState(false);

    const clickBack = () => {
        navigate(`/hosting/folder/professional-situation/`)
    }

    return (
        <PageBuilder title="Mon Espace Agence" show={true} footer={undefined} >
            <>
                <FolderBuilder back={clickBack} title={title}>
                    <>
                        <div className="flex flex-col items-center justify-start h-full w-full animate-showin">
                            <div className="w-[30rem] py-[1rem] space-y-6">
                                <div className="flex flex-col space-y-2">
                                    <div className="font-semibold text-4xl text-supergray">Ressources</div>
                                </div>
                                <div className="space-y-4">
                                    <div className="text-supergray font-normal text-base">
                                        Le locataire peut fournir une copie du document original. Mais le propriétaire a le droit d'exiger la présentation de l'original. Le document doit être rédigé ou traduit en français.
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-supergray font-semibold text-base">
                                            Mes ressources
                                        </div>
                                        <div className="text-supergray/70 font-normal text-sm">
                                            Pensez à renseigner des informations réel. Vos documents seront vérifié par notre équipe afin de fournir a l'annonceur l'integrité des documents.
                                        </div>
                                        <div className="pt-4 flex flex-col space-y-2">

                                            <>{Object.values(SituationsList).filter(r => r.ressources.includes(UserData.folder.ressources.situation)).map(m=>{
                                                <>{Object.values(RessourcesList).filter(ml => m.ressources.includes(ml.id)).map(mo=><>{console.log(mo)}</>)}</>
                                            })}</>

                                            {UserData.folder.ressources.situation === "" && <div>Aucunes situation enregistré</div>}
                                            {UserData.folder.ressources.situation === SituationsList.vfMqDUfRyNHpYR7WdFPr.id &&
                                                <>
                                                    <button className="flex flex-row justify-between superborder w-full p-4 rounded-lg">
                                                        <div className="flex flex-col">
                                                            <div className="text-left font-medium text-base text-supergray">{RessourcesList.vfMqDUfRyNHpYR7WdFPr.title}</div>
                                                            <div className="text-left font-normal text-sm text-supergray/70">
                                                                Aucuns clients enregistré
                                                            </div>
                                                        </div>
                                                        <div
                                                            data-tip="À compléter" 
                                                            className="tooltip tooltip-left tooltip-warning"
                                                        >
                                                            <Icon className={'fill-orange-600'} name={'RiErrorWarningFill'} size={24} />
                                                        </div>
                                                    </button>
                                                </>
                                            }
                                            {UserData.folder.ressources.situation === SituationsList.vfMqDUfRyNHpYR7WdFPr.id &&
                                                <>
                                                    <button className="flex flex-row justify-between superborder w-full p-4 rounded-lg">
                                                        <div className="flex flex-col">
                                                        <div className="text-left font-medium text-base text-supergray">{RessourcesList.vfMqDUfRyNHpYR7WdFPr.title}</div>
                                                            <div className="text-left font-normal text-sm text-supergray/70">
                                                                Aucuns clients enregistré
                                                            </div>
                                                        </div>
                                                        <div
                                                            data-tip="À compléter"
                                                            className="tooltip tooltip-left tooltip-warning"
                                                        >
                                                            <Icon className={'fill-orange-600'} name={'RiErrorWarningFill'} size={24} />
                                                        </div>
                                                    </button>
                                                </>
                                            }
                                            {UserData.folder.ressources.situation === SituationsList["6XoqPf0ilnX87gX0EGjr"].id &&
                                                <>
                                                    <button className="flex flex-row justify-between superborder w-full p-4 rounded-lg">
                                                        <div className="flex flex-col">
                                                            <div className="text-left font-medium text-base text-supergray">{SituationsList["6XoqPf0ilnX87gX0EGjr"].title}</div>
                                                            <div className="text-left font-normal text-sm text-supergray/70">
                                                                Aucunes ressources enregistré
                                                            </div>
                                                        </div>
                                                        <div
                                                            data-tip="À compléter" 
                                                            className="tooltip tooltip-left tooltip-warning"
                                                        >
                                                            <Icon className={'fill-orange-600'} name={'RiErrorWarningFill'} size={24} />
                                                        </div>
                                                    </button>
                                                </>
                                            }  
                                        </div>
                                    </div>
                                    <div>

                                    

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