import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { useContext, useState } from "react"
import Icon from "../../components/icon/icons"
import { UserContext } from "../../contexts/UserContext"
import { storage } from "../../firebase.config"
import UserDataServices from "../../services/UserData.services"
import { RessourceBuilder } from "../RessourceBuilder"

type Page = {
    complet: boolean
    optional: boolean
    parameter: any
}
export const EmploymentContract = ({ complet, optional, parameter }: Page) => {

    const submit = () => {

    }

    return (
        <RessourceBuilder onSubmit={submit} complet={complet} optional={optional} parameter={parameter}>
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
        </RessourceBuilder>
    )
}