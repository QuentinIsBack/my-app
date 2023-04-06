import { PageBuilder } from "../../../components/pagebuilder/pagebuilder";
import { FolderBuilder } from "../../../components/pagebuilder/folderbuilder";
import { useContext, useEffect, useState } from "react";
import { ChooseButtonNew } from "../../../components/button/ChooseButtonNew";
import SituationFolder from '../../../utils/folder/ProfessionalSituation.utils.json'
import UserDataServices from "../../../services/UserData.services";
import { UserContext } from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Icon from "../../../components/icon/icons";
import RessourcesList from "../../../utils/folder/Ressources.folder.json";
import SituationsList from "../../../utils/folder/ProfessionalSituation.utils.json";
import { Modal } from "../../../components/modal/Modal";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../firebase.config";
import { RessourceBuilder, VarGetter } from "../../../constructor/RessourceBuilder";

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
                                        
                                        {/*
                                            {Object.values(SituationsList).filter(f => UserData.folder.ressources.situation === f.id).map(m=>(
                                                Object.values(RessourcesList).filter(fi => m.ressources.includes(fi.id)).map(ml => (
                                                    <ButtonSetting parameter={ml} optional={false}  />
                                                ))
                                            ))}
                                            {Object.values(SituationsList).filter(f => UserData.folder.ressources.situation === f.id).map(m => (
                                                Object.values(RessourcesList).filter(fi => m.optional.includes(fi.id)).map(ml => (
                                                    <ButtonSetting parameter={ml} optional={true} />
                                                ))
                                            ))} */}
                                        
                                            <div className="mt-8 pt-8 border-t border-red-500">
                                                {Object.values(SituationsList).filter(f => UserData.folder.ressources.situation === f.id).map(m=>(
                                                    Object.values(RessourcesList).filter(fi => m.ressources.includes(fi.id)).map(ml => (
                                                        //<RessourceBuilder optional={false} complet={ConditionRessource(ml)} parameter={ml} />
                                                       // VarGetter(ConditionRessource(ml), false, ml)
                                                       <></>
                                                    ))  
                                                ))}
                                            </div>

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