import { MouseEventHandler, useContext, useState } from "react";
import LOGO from '../../assets/logoagencie.svg';
import { CDisclosure } from "../disclosure/cdisclosure";
import { CDisclosureItem } from "../disclosure/cdisclosureitem";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

type PageType = {
    title: string,
    children: JSX.Element,
    back: MouseEventHandler<HTMLButtonElement>,
    next: MouseEventHandler<HTMLButtonElement>
}
export const FolderBuilder = ({ 
    title,
    children,
    back,
    next
}: PageType) => {
    const [burger, setBurger] = useState(true);
    const { UserData } = useContext(UserContext)
    const navigate = useNavigate();

    return (
        <>
            <div className="w-full h-full">
                {/* NavBar */}
                <div className="absolute bg-gray-100/75 w-[var(--burger--folder)] h-full">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <div className="flex flex-row justify-between px-6 h-[var(--burger--top)] border-b">
                                <img width={25} alt={'logo'} src={LOGO} />
                                <button onClick={()=>navigate('/hosting')} className="font-semibold text-supergray text-sm underline">Enregistrer et quitter</button>
                            </div>
                            <div className="space-y-6">
                                <div className="pt-6 px-6">
                                    <div className="font-semibold text-supergray text-2xl leading-none">Proposez votre candidature</div>
                                </div>
                                <div className="px-4 space-y-2">
                                    <CDisclosure title="Mon dossier" defaultOpen={window.location.pathname.includes("proof-identity") || window.location.pathname.includes("proof-domicile")} locked={true}>
                                        <>
                                            <CDisclosureItem to={'/hosting/folder/proof-identity/'} locked={UserData.folder.essentials.proof_identity !== ""}>
                                                <>
                                                    Justificatif d'identité
                                                </>
                                            </CDisclosureItem>
                                            <CDisclosureItem to={'/hosting/folder/proof-domicile/'} locked={UserData.folder.essentials.proof_domicile !== ""}>
                                                <>
                                                    Justificatif de domicile
                                                </>
                                            </CDisclosureItem>
                                        </>
                                    </CDisclosure>
                                    <CDisclosure title="Ma situation" locked={false}>
                                        <>
                                            <CDisclosureItem to={'/'}>
                                                <>
                                                    Situation Professionnelle
                                                </>
                                            </CDisclosureItem>
                                            <CDisclosureItem to={'/'}>
                                                <>
                                                    Ressources
                                                </>
                                            </CDisclosureItem>
                                        </>
                                    </CDisclosure>
                                    <CDisclosure title="Mes garants" locked={false}>
                                        <>
                                            <CDisclosureItem to={'/'}>
                                                <>
                                                    Justificatif d'identité
                                                </>
                                            </CDisclosureItem>
                                            <CDisclosureItem to={'/'}>
                                                <>
                                                    Attestation de domicile
                                                </>
                                            </CDisclosureItem>
                                            <CDisclosureItem to={'/'}>
                                                <>
                                                    Situation Professionnelle
                                                </>
                                            </CDisclosureItem>
                                            <CDisclosureItem to={'/'}>
                                                <>
                                                Ressources
                                                </>
                                            </CDisclosureItem>
                                        </>
                                    </CDisclosure>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="text-superred font-medium text-sm text-center py-6">
                                Supprimer le dossier
                            </div>
                        </div>
                    </div>
                    
                </div>
                {/* Infos */}
                <div className={`absolute h-full left-[var(--burger--folder)]  right-0`}>
                    <div className="relative w-full h-[var(--burger--top)] text-supergray font-semibold text-base px-6">
                        <div className="absolute top-1/2 -translate-y-1/2">
                            {title}
                        </div>
                    </div>
                    <div className="absolute top-[var(--burger--top)] bottom-[var(--burger--bottom)] right-0 left-0 overflow-scroll">
                        {children}
                    </div>
                    <div className="absolute right-0 left-0 bottom-[var(--burger--bottom)] h-[1px] bg-gray-200">
                        <div
                            style={{ width: `25%` }}
                            className={`h-full bg-superblue`}>
                        </div>
                    </div>
                    <div className="absolute h-[var(--burger--bottom)] bottom-0 right-0 left-0 overflow-hidden">
                        {back!==undefined&&<div className="absolute left-10 top-1/2 -translate-y-1/2">
                            <button onClick={back} className="rounded-lg ring-1 ring-supergray px-4 py-1.5 text-supergray font-semibold text-sm hover:bg-gray-100 duration-150">Retour</button>
                        </div>}
                        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                            <div className="text-supergray/60 font-medium text-xs">13 éléments à envoyer</div>
                        </div>
                        {next!==undefined&&<div className="absolute right-10 top-1/2 -translate-y-1/2">
                            <button onClick={next} className="rounded-lg ring-1 ring-supergray bg-supergray px-4 py-1.5 text-white font-semibold text-sm hover:bg-black duration-150">Suivant</button>
                        </div>}
                    </div>
                </div>
            </div>
        </>
    )
}

FolderBuilder.defaultProps = {
    next: undefined,
    back: undefined,
}