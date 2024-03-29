import { PageBuilder } from "../../../components/pagebuilder/pagebuilder";
import { FolderBuilder } from "../../../components/pagebuilder/folderbuilder";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import RessourcesList from "../../../utils/folder/Ressources.folder.json";
import SituationsList from "../../../utils/folder/ProfessionalSituation.utils.json";
import { GetCondition, VarGetter } from "../../../constructor/RessourceBuilder";

function App() {
    const [title, setTitle] = useState("Ressources")
    const { UserData } = useContext(UserContext)
    const navigate = useNavigate();

    const [modal, setModal] = useState(false);
    const [use, setUse] = useState(false);

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
                                            Pensez à renseigner des informations à jour. Ils seront vérifié par notre équipe afin de fournir a l'annonceur l'integrité des documents.
                                        </div>
                                        <div className="pt-4 flex flex-col space-y-2">
                                            {Object.values(SituationsList).filter(f => UserData.folder.ressources.situation === f.id).map(m=>(
                                                Object.values(RessourcesList).filter(fi => m.ressources.includes(fi.id)).map(ml => (
                                                    <VarGetter parameter={ml} optional={false} />
                                                ))  
                                            ))}
                                            <div className="py-4">
                                                <div className="h-[1px] w-full bg-gray-200" />
                                            </div>
                                            {Object.values(SituationsList).filter(f => UserData.folder.ressources.situation === f.id).map(m => (
                                                Object.values(RessourcesList).filter(fi => m.optional.includes(fi.id)).map(ml => (
                                                    <VarGetter parameter={ml} optional={true} />
                                                ))
                                            ))}
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

// END TESTER