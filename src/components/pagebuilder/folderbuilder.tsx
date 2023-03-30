import { useState } from "react";
import LOGO from '../../assets/logoagencie.svg';
import { CDisclosure } from "../disclosure/cdisclosure";
import { CDisclosureItem } from "../disclosure/cdisclosureitem";

type PageType = {
    title: string,
    children: JSX.Element
}
export const FolderBuilder = ({ 
    title,
    children
}: PageType) => {
    const [burger, setBurger] = useState(true);
    return (
        <>
            <div className="w-full h-full">
                <div className="absolute bg-gray-100/75 w-[var(--burger--folder)] h-full">
                    <div className="flex flex-row justify-between px-6 h-[var(--burger--top)] border-b">
                        <img width={25} alt={'logo'} src={LOGO} />
                        <button className="font-semibold text-supergray text-sm underline">Enregistrer et quitter</button>
                    </div>
                    <div className="space-y-6">
                        <div className="pt-6 px-6">
                            <div className="font-semibold text-supergray text-2xl leading-none">Proposez votre candidature</div>
                        </div>
                        <div className="px-4 space-y-2">
                            <CDisclosure title="Votre situation" locked={true}>
                                <>
                                    <CDisclosureItem>
                                        <>
                                            Administratif
                                        </>
                                    </CDisclosureItem>
                                    <CDisclosureItem>
                                        <>
                                            Informations essentielles
                                        </>
                                    </CDisclosureItem>
                                </>
                            </CDisclosure>
                            <CDisclosure title="Professionnel" locked={false}>
                                <>
                                    <CDisclosureItem>
                                        <>
                                            Type d'activité
                                        </>
                                    </CDisclosureItem>
                                </>
                            </CDisclosure>
                            <CDisclosure title="Vos garants" locked={false}>
                                <>
                                    <CDisclosureItem>
                                        <>
                                            Informations essentielles
                                        </>
                                    </CDisclosureItem>
                                </>
                            </CDisclosure>
                        </div>
                    </div>
                </div>
                <div className={`absolute h-full left-[var(--burger--folder)]  right-0`}>
                    <div className="relative w-full h-[var(--burger--top)] border-b text-supergray font-semibold text-base px-6">
                        <div className="absolute top-1/2 -translate-y-1/2">
                            {title}
                        </div>
                    </div>
                    <div className="absolute top-[var(--burger--top)] bottom-0 right-0 left-0">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}