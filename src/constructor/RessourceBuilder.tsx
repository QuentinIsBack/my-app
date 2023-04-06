import { useContext, useState } from "react"
import Icon from "../components/icon/icons"
import { UserContext } from "../contexts/UserContext"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { storage } from "../firebase.config"
import UserDataServices from "../services/UserData.services"
import { Payslip } from "./ressources/Payslip"
import { EmploymentContract } from "./ressources/EmploymentContract"

type PageType = {
    complet: boolean
    optional: boolean 
    parameter: any
    children: JSX.Element,
    onSubmit: ()=>void
}
export const RessourceBuilder = ({ 
    complet,
    optional,
    parameter,
    children,
    onSubmit,
}: PageType) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => !open && setOpen(!open)} className={`flex flex-col duration-150 w-full ${!open&&"active:scale-98"} p-6 bg-white rounded-xl ring-1 ring-gray-200 hover:ring-1 hover:ring-supergray overflow-hidden focus:outline-none`}>
                <div className="flex flex-col justify-between space-y-1 w-full">
                    <div className="flex flex-row justify-between items-center">
                        <div className="text-left font-medium text-base text-supergray">{parameter.title}</div>
                        <div className="flex flex-row items-center justify-start space-x-2">
                            {!open&&<div className="text-sm text-supergray font-medium">
                                {!optional ? complet ? "Terminé" : "Informations manquant" : "Facultatif" }
                            </div>}
                            {optional ? <Icon className={'fill-blue-500'} name={'TiWarningOutline'} size={24} /> : complet ?  <Icon className={'fill-blue-600'} name={'AiFillCheckCircle'} size={24} /> : <Icon className={'fill-red-600'} name={'RiErrorWarningFill'} size={24} />}
                        </div>
                    </div>
                    <div className="w-full text-left font-normal text-sm text-supergray/70">
                        {open ? parameter?.edit : parameter?.missing}
                    </div>
                </div>
                {open && <div className="w-full">
                    <div className="py-4 border-y my-4">
                        {children}
                    </div>
                    <div className="flex justify-between w-full">
                        <button onClick={() => setOpen(!open)} className="duration-150 px-5 py-2.5 underline hover:bg-gray-100 rounded-lg font-medium text-supergray text-sm">Annuler</button>
                        <button onClick={onSubmit} className="duration-150 px-5 py-2.5 bg-supergray hover:bg-black rounded-lg font-medium text-white text-sm">Enregistrer</button>
                    </div>
                </div>}
            </button>
        </>
    )
}

RessourceBuilder.defaultProps = {
    complet: false,
    optional: false
}

type Page = {
    optional: boolean
    parameter: any
}
export const VarGetter = ({ optional, parameter }: Page) => {
    const { UserData } = useContext(UserContext)

    switch(parameter.id){
        case 'payslip': {
            return (<Payslip 
                complet={(UserData.folder.ressources.ressources.payslip.payslip1 !== '' && UserData.folder.ressources.ressources.payslip.payslip2 !== '' && UserData.folder.ressources.ressources.payslip.payslip3 !== '')} 
                optional={optional} 
                parameter={parameter} />)
        }
        case 'employmentcontract': {
            return (<EmploymentContract 
                complet={false} 
                optional={optional} 
                parameter={parameter} />)
        }
        default: {
            return(<>Sans constance</>)
        }
    }
}

export const GetCondition = (parameter:any) => {
    const { UserData } = useContext(UserContext)

    switch (parameter) {
        case 'payslip': {
            return (UserData.folder.ressources.ressources.payslip.payslip1 !== '' && UserData.folder.ressources.ressources.payslip.payslip2 !== '' && UserData.folder.ressources.ressources.payslip.payslip3 !== '')
        }

        default: {
            return (false)
        }
    }
}

