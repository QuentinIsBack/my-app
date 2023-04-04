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
import { Modal } from "../../../components/modal/Modal";

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
                                                    <ButtonSetting parameter={ml} optional={false}  />
                                                ))
                                            ))}
                                            {Object.values(SituationsList).filter(f => UserData.folder.ressources.situation === f.id).map(m => (
                                                Object.values(RessourcesList).filter(fi => m.optional.includes(fi.id)).map(ml => (
                                                    <ButtonSetting parameter={ml} optional={true} />
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


// TESTER
type PageType = {
    parameter: any,
    optional: boolean
}
export const ButtonSetting = ({ parameter, optional }: PageType) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button onClick={() => !open && setOpen(!open)} className={`flex flex-col duration-150 ${!open&&"active:scale-98"} p-6 bg-white rounded-xl ring-1 ring-gray-200 hover:ring-1 hover:ring-supergray overflow-hidden focus:outline-none`}>
                <div className="flex flex-col justify-between space-y-1 w-full">
                    <div className="flex flex-row justify-between items-center">
                        <div className="text-left font-medium text-base text-supergray">{parameter.title}</div>
                        <div className="flex flex-row items-center justify-start space-x-2">
                            {!open&&<div className="text-sm text-supergray font-medium">
                                {!optional ? "Informations manquant" : "Facultatif" }
                            </div>}
                            {!optional ? <Icon className={'fill-red-600'} name={'RiErrorWarningFill'} size={24} /> : <Icon className={'fill-blue-500'} name={'TiWarningOutline'} size={24} />}
                        </div>
                    </div>
                    <div className="w-full text-left font-normal text-sm text-supergray/70">
                        {open ? parameter?.edit : parameter?.missing}
                    </div>
                </div>
                {open && <div className="w-full">
                    <div className="py-4 border-y my-4">
                        <div>
                            {VarGetter(parameter.id)}
                        </div>
                    </div>
                    <div className="flex justify-between w-full">
                        <button onClick={() => setOpen(!open)} className="duration-150 px-5 py-2.5 underline hover:bg-gray-100 rounded-lg font-medium text-supergray text-sm">Annuler</button>
                        <button onClick={() => setOpen(!open)} className="duration-150 px-5 py-2.5 bg-supergray hover:bg-black rounded-lg font-medium text-white text-sm">Enregistrer</button>
                    </div>
                </div>}
            </button>
        </>
    )
}
const VarGetter = (id: string) => {
    switch(id) {
        // Bulletins
        case "vfMqDUfRyNHpYR7Wdfdf": {
            return (
                <>
                    <div className="w-full flex flex-col space-y-2">
                        <div>
                            <div className="text-left text-supergray font-semibold text-base">Ajouter vos bulletins de salaires</div>
                            <div className="text-left text-supergray/70 font-normal text-sm">En ajoutant votre contrat vous donnez plus de chance à l'annonceur de vous choisir.</div>
                        </div>
                        <div className="w-full grid grid-cols-3 divide-x">
                            <div className="pr-2">
                                <div className="group h-fit w-full">
                                    <div className="rounded-lg border group-hover:border-black border-gray-200 flex flex-col space-y-3 justify-center items-center p-4">
                                        <Icon name="IoAdd" className="duration-150 stroke-supergray/70 group-hover:stroke-supergray" size={20} />
                                        <div className="duration-150 font-medium text-supergray/70 group-hover:text-supergray text-sm">Fiche de paie : Janvier</div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2">
                                <div className="group h-fit w-full">
                                    <div className="rounded-lg border group-hover:border-black border-gray-200 flex flex-col space-y-3 justify-center items-center p-4">
                                        <Icon name="IoAdd" className="duration-150 stroke-supergray/70 group-hover:stroke-supergray" size={20} />
                                        <div className="duration-150 font-medium text-supergray/70 group-hover:text-supergray text-sm">Fiche de paie : Février</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pl-2">
                                <div className="group h-fit w-full">
                                    <div className="rounded-lg border group-hover:border-black border-gray-200 flex flex-col space-y-3 justify-center items-center p-4">
                                        <Icon name="IoAdd" className="duration-150 stroke-supergray/70 group-hover:stroke-supergray" size={20} />
                                        <div className="duration-150 font-medium text-supergray/70 group-hover:text-supergray text-sm">Fiche de paie : Mars</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
            break;
        }

        // Contrat
        case "vfMqDUfRyNHpYR7WdFPr": {
            return (
                <>
                    <div className="w-full flex flex-col space-y-2">
                        <div>
                            <div className="text-left text-supergray font-semibold text-base">Ajouter votre contrat</div>
                            <div className="text-left text-supergray/70 font-normal text-sm">En ajoutant votre contrat vous donnez plus de chance à l'annonceur de vous choisir.</div>
                        </div>
                        <div className="group h-fit w-full">
                            <div className="rounded-lg border group-hover:border-black border-gray-200 flex flex-col space-y-3 justify-center items-center p-4">
                                <Icon name="IoAdd" className="duration-150 stroke-supergray/70 group-hover:stroke-supergray" size={20} />
                                <div className="duration-150 font-medium text-supergray/70 group-hover:text-supergray text-sm">Ajouter un document</div>
                            </div>
                        </div>
                    </div>
                </>
            )
            break;
        }

        // Simulation
        case "tKsn3p8Lro9FyE0ogrJ4": {
            return (
                <>
                    <div className="w-full flex flex-col space-y-2">
                        <div>
                            <div className="text-left text-supergray font-semibold text-base">Ajouter votre attestation</div>
                            <div className="text-left text-supergray/70 font-normal text-sm">En ajoutant votre contrat vous donnez plus de chance à l'annonceur de vous choisir.</div>
                        </div>
                        <div className="group h-fit w-full">
                            <div className="rounded-lg border group-hover:border-black border-gray-200 flex flex-col space-y-3 justify-center items-center p-4">
                                <Icon name="IoAdd" className="duration-150 stroke-supergray/70 group-hover:stroke-supergray" size={20} />
                                <div className="duration-150 font-medium text-supergray/70 group-hover:text-supergray text-sm">Ajouter un document</div>
                            </div>
                        </div>
                    </div>
                </>
            )
            break;
        }

        // Scolarité
        case "tKsn3p8kfTRE5gfdgrJ4": {
            return (
                <>
                    <div className="w-full flex flex-col space-y-2">
                        <div>
                            <div className="text-left text-supergray font-semibold text-base">Ajouter votre attestation</div>
                            <div className="text-left text-supergray/70 font-normal text-sm">En ajoutant votre contrat vous donnez plus de chance à l'annonceur de vous choisir.</div>
                        </div>
                        <div className="group h-fit w-full">
                            <div className="rounded-lg border group-hover:border-black border-gray-200 flex flex-col space-y-3 justify-center items-center p-4">
                                <Icon name="IoAdd" className="duration-150 stroke-supergray/70 group-hover:stroke-supergray" size={20} />
                                <div className="duration-150 font-medium text-supergray/70 group-hover:text-supergray text-sm">Ajouter un document</div>
                            </div>
                        </div>
                    </div>
                </>
            )
            break;
        }

        // Versement
        case "tKsn3p8Lro90oefdgrJ4": {
            return (
                <>
                    <div className="w-full flex flex-col space-y-2">
                        <div>
                            <div className="text-left text-supergray font-semibold text-base">Ajouter votre justificatif</div>
                            <div className="text-left text-supergray/70 font-normal text-sm">En ajoutant votre contrat vous donnez plus de chance à l'annonceur de vous choisir.</div>
                        </div>
                        <div className="group h-fit w-full">
                            <div className="rounded-lg border group-hover:border-black border-gray-200 flex flex-col space-y-3 justify-center items-center p-4">
                                <Icon name="IoAdd" className="duration-150 stroke-supergray/70 group-hover:stroke-supergray" size={20} />
                                <div className="duration-150 font-medium text-supergray/70 group-hover:text-supergray text-sm">Ajouter un document</div>
                            </div>
                        </div>
                    </div>
                </>
            )
            break;
        }
    }
}
// END TESTER