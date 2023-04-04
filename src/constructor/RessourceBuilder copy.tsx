import { useContext, useEffect, useState } from "react"
import { UserContext } from "../contexts/UserContext"
import Icon from "../components/icon/icons"

type PageType = {
    complet: boolean
    optional: boolean 
}
export const RessourceBuilder = ({ 
    complet,
}: PageType) => {
    const { UserData } = useContext(UserContext)


    if (
        UserData.folder.ressources.ressources.payslip.payslip1 !== "" &&
        UserData.folder.ressources.ressources.payslip.payslip2 !== "" &&
        UserData.folder.ressources.ressources.payslip.payslip3 !== ""
    ) {
        complet = true
    }


    return (
        <>
            {complet ?
                <Icon className={'fill-blue-600'} name={'AiFillCheckCircle'} size={24} />
            :
                <Icon className={'fill-red-600'} name={'RiErrorWarningFill'} size={24} />}
        </>
    )
}

RessourceBuilder.defaultProps = {
    complet: false,
    optional: false
}